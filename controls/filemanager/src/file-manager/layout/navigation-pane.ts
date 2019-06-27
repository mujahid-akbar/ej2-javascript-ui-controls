import { TreeView as BaseTreeView, NodeSelectEventArgs, NodeExpandEventArgs, DrawNodeEventArgs } from '@syncfusion/ej2-navigations';
import { NodeEditEventArgs, NodeClickEventArgs } from '@syncfusion/ej2-navigations';
import { isNullOrUndefined as isNOU, select, setValue, getValue, DragEventArgs, Draggable } from '@syncfusion/ej2-base';
import { KeyboardEvents, KeyboardEventArgs, Touch, closest } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as events from '../base/constant';
import * as CLS from '../base/classes';
import { IFileManager, ReadArgs, FileLoadEventArgs, NotifyArgs } from '../base/interface';
import { read, Download, GetDetails, Delete } from '../common/operations';
import { createDialog } from '../pop-up/dialog';
import { updatePath, getPath, getDirectories } from '../common/utility';
import { createVirtualDragElement, dragStopHandler, dragStartHandler, draggingHandler, getDirectoryPath, getModule } from '../common/index';
import { copyFiles, cutFiles, removeActive, pasteHandler, getParentPath, readDropPath } from '../common/index';
import { hasEditAccess, createDeniedDialog, hasDownloadAccess, getAccessClass } from '../common/index';

/**
 * NavigationPane module
 */
export class NavigationPane {

    /* Internal variables */
    private parent: IFileManager;
    public treeObj: BaseTreeView;
    public activeNode: Element;
    private keyboardModule: KeyboardEvents;
    private keyConfigs: { [key: string]: string };
    private expandNodeTarget: string;
    public rootNode: string;
    public removeNodes: string[] = [];
    public moveNames: string[] = [];
    public touchClickObj: Touch;
    public expandTree: boolean = false;
    private isDrag: boolean = false;
    private dragObj: Draggable;
    private isPathDragged: boolean = false;
    /**
     * Constructor for the TreeView module
     * @hidden
     */
    constructor(parent?: IFileManager) {
        this.parent = parent;
        this.addEventListener();
        this.keyConfigs = {
            altEnter: 'alt+enter',
            esc: 'escape',
            del: 'delete',
            ctrlX: 'ctrl+x',
            ctrlC: 'ctrl+c',
            ctrlV: 'ctrl+v',
            ctrlShiftN: 'ctrl+shift+n',
            shiftF10: 'shift+F10',
            f2: 'f2'
        };
    }

    private onInit(): void {
        if (!isNOU(this.treeObj)) { return; }
        let rootData: { [key: string]: Object; } = getValue('/', this.parent.feParent);
        setValue('_fm_icon', 'e-fe-folder', rootData);
        if (!hasEditAccess(rootData)) {
            setValue('_fm_htmlAttr', { 'class': getAccessClass(rootData) }, rootData);
        }
        this.rootNode = getValue('name', getValue('/', this.parent.feParent));
        this.treeObj = new BaseTreeView({
            fields: {
                dataSource: [rootData], id: '_fm_id', parentID: '_fm_pId', expanded: '_fm_expanded', selected: '_fm_selected', text: 'name',
                hasChildren: 'hasChild', iconCss: '_fm_icon', htmlAttributes: '_fm_htmlAttr', tooltip: 'name'
            },
            nodeSelected: this.onNodeSelected.bind(this),
            nodeExpanding: this.onNodeExpand.bind(this),
            nodeClicked: this.onNodeClicked.bind(this),
            allowEditing: true,
            nodeEditing: this.onNodeEditing.bind(this),
            drawNode: this.onDrowNode.bind(this),
            enableRtl: this.parent.enableRtl,
            dataBound: this.addDragDrop.bind(this)
        });
        this.treeObj.appendTo('#' + this.parent.element.id + CLS.TREE_ID);
        this.treeObj.element.style.width = '25%';
        this.wireEvents();
    }

    private addDragDrop(): void {
        if (!this.parent.isMobile && this.treeObj) {
            if (this.parent.allowDragAndDrop) {
                if (this.dragObj) { this.dragObj.destroy(); }
                this.dragObj = new Draggable(this.treeObj.element, {
                    cursorAt: this.parent.dragCursorPosition,
                    dragTarget: '.' + CLS.FULLROW,
                    dragArea: this.parent.element,
                    drag: draggingHandler.bind(this, this.parent),
                    dragStart: dragStartHandler.bind(this, this.parent),
                    dragStop: dragStopHandler.bind(this, this.parent),
                    enableTailMode: true,
                    enableAutoScroll: true,
                    helper: this.dragHelper.bind(this)
                });
            } else if (!this.parent.allowDragAndDrop && this.dragObj) {
                this.dragObj.destroy();
            }
        }
    }

    public dragHelper(args: { element: HTMLElement, sender: MouseEvent & TouchEvent }): HTMLElement {
        let dragTarget: Element = <Element>args.sender.target;
        if (!dragTarget.classList.contains(CLS.FULLROW)) { return null; }
        let dragLi: Element = closest(dragTarget, 'li');
        this.parent.dragPath = '';
        this.parent.dragData = [];
        this.parent.activeElements = [];
        this.parent.activeElements = [dragLi];
        this.parent.dragNodes = [];
        getModule(this.parent, dragLi);
        this.parent.dragData = <{ [key: string]: Object; }[]>this.getTreeData(dragLi);
        this.parent.dragPath = <string>this.parent.dragData[0].filterPath;
        this.parent.dragNodes.push(<string>this.parent.dragData[0].name);
        createVirtualDragElement(this.parent);
        return this.parent.virtualDragElement;
    }

    private onDrowNode(args: DrawNodeEventArgs): void {
        let eventArgs: FileLoadEventArgs = {
            element: args.node,
            fileDetails: args.nodeData,
            module: 'NavigationPane'
        };
        this.parent.trigger('fileLoad', eventArgs);
    }

    private addChild(files: { [key: string]: Object; }[], target: string, prevent: boolean): void {
        let directories: Object[] = getDirectories(files);
        if (directories.length > 0) {
            let length: number = 0;
            let folders: { [key: string]: Object; }[] = <{ [key: string]: Object; }[]>directories;
            while (length < directories.length) {
                folders[length]._fm_icon = 'e-fe-folder';
                if (!hasEditAccess(folders[length])) {
                    setValue('_fm_htmlAttr', { 'class': getAccessClass(folders[length]) }, folders[length]);
                }
                length++;
            }
            this.treeObj.addNodes(directories as { [key: string]: Object; }[], target, null, prevent);
        }
    }

    private onNodeSelected(args: NodeSelectEventArgs): void {
        if (this.parent.breadcrumbbarModule && this.parent.breadcrumbbarModule.searchObj) {
            this.parent.breadcrumbbarModule.searchObj.element.value = '';
        }
        this.parent.searchedItems = [];
        if (!args.isInteracted && !this.isPathDragged) { return; }
        let text: string = getValue('text', args.nodeData);
        this.activeNode = args.node;
        this.parent.activeModule = 'navigationpane';
        this.parent.selectedItems = [];
        updatePath(args.node, text, this.parent);
        this.expandNodeTarget = null;
        if (args.node.querySelector('.' + CLS.ICONS) && args.node.querySelector('.' + CLS.LIST_ITEM) === null) {
            this.expandNodeTarget = 'add';
        }
        this.parent.itemData = this.getTreeData(getValue('id', args.nodeData));
        read(this.parent, this.isPathDragged ? events.pasteEnd : events.pathChanged, this.parent.path);
        this.parent.visitedItem = args.node;
        this.isPathDragged = false;
    }
    /* istanbul ignore next */
    private onPathDrag(args: object[]): void {
        this.isPathDragged = true;
        this.selectResultNode(args[0]);
    }
    /* istanbul ignore next */
    private onNodeExpand(args: NodeExpandEventArgs): void {
        if (!args.isInteracted && !this.isDrag) { return; }
        let path: string = getPath(args.node, getValue('text', args.nodeData));
        if (args.node.querySelector('.' + CLS.LIST_ITEM) === null) {
            this.expandNodeTarget = args.node.getAttribute('data-uid');
            this.parent.expandedId = this.expandNodeTarget;
            this.parent.itemData = this.getTreeData(getValue('id', args.nodeData));
            read(this.parent, events.nodeExpand, path);
        }
    }

    /* istanbul ignore next */
    private onNodeExpanded(args: ReadArgs): void {
        this.addChild(args.files, this.expandNodeTarget, false);
        this.parent.expandedId = null;
    }

    private onNodeClicked(args: NodeClickEventArgs): void {
        this.parent.activeModule = 'navigationpane';
        this.activeNode = args.node;
    }

    /* istanbul ignore next */
    private onNodeEditing(args: NodeEditEventArgs): void {
        if (!isNOU(args.innerHtml)) {
            args.cancel = true;
        }
    }

    private onPathChanged(args: ReadArgs): void {
        this.parent.isCut = false;
        let currFiles: { [key: string]: Object; }[] = getValue(this.parent.path, this.parent.feFiles);
        if (this.expandNodeTarget === 'add') {
            let sNode: Element = select('[data-uid="' + this.treeObj.selectedNodes[0] + '"]', this.treeObj.element);
            let ul: Element = select('.' + CLS.LIST_PARENT, sNode);
            if (isNOU(ul)) {
                this.addChild(args.files, this.treeObj.selectedNodes[0], true);
            }
            this.expandNodeTarget = '';
        }
        if (isNOU(currFiles)) {
            setValue(this.parent.path, args.files, this.parent.feFiles);
        }
    }

    private updateTree(args: ReadArgs): void {
        let id: string = this.treeObj.selectedNodes[0];
        let toExpand: boolean = this.treeObj.expandedNodes.indexOf(id) === -1 ? false : true;
        this.removeChildNodes(id);
        setValue(this.parent.path, args.files, this.parent.feFiles);
        this.addChild(args.files, id, !toExpand);
    }

    private removeChildNodes(id: string): void {
        let sNode: Element = select('[data-uid="' + id + '"]', this.treeObj.element);
        let parent: Element = select('.' + CLS.LIST_PARENT, sNode);
        let childs: Element[] = parent ? Array.prototype.slice.call(parent.children) : null;
        if (childs) { this.treeObj.removeNodes(childs); }
    }

    private onOpenEnd(args: ReadArgs): void {
        let sleId: string = this.parent.pathId[this.parent.pathId.length - 1];
        this.treeObj.expandAll(this.treeObj.selectedNodes);
        this.treeObj.selectedNodes = [sleId];
        this.expandNodeTarget = 'add';
        this.onPathChanged(args);
    }

    private onOpenInit(args: NotifyArgs): void {
        if (this.parent.activeModule === 'navigationpane') {
            if (args.target.querySelector('.' + CLS.ICONS)) {
                this.treeObj.expandAll(this.treeObj.selectedNodes);
            }
        }
    }

    private onInitialEnd(args: ReadArgs): void {
        this.onInit();
        this.addChild(args.files, getValue('_fm_id', args.cwd), false);
    }

    private onFinalizeEnd(args: ReadArgs): void {
        this.onInit();
        let id: string = getValue('_fm_id', args.cwd);
        this.removeChildNodes(id);
        this.addChild(args.files, id, false);
        this.treeObj.selectedNodes = [this.parent.pathId[this.parent.pathId.length - 1]];
    }

    private onCreateEnd(args: ReadArgs): void {
        this.updateTree(args);
    }

    private onSelectedData(): void {
        if (this.parent.activeModule === 'navigationpane') {
            this.updateItemData();
        }
    }

    private onDeleteInit(): void {
        if (this.parent.activeModule === 'navigationpane') {
            this.updateActionData();
            let name: string = getValue('name', this.parent.itemData[0]);
            Delete(this.parent, [name], this.parent.path, 'delete');
        }
    }

    /* istanbul ignore next */
    private onDeleteEnd(args: ReadArgs): void {
        if (this.parent.activeModule === 'navigationpane') {
            let selectedNode: string = this.treeObj.selectedNodes[0];
            let selcetedEle: Element = select('[data-uid="' + selectedNode + '"]', this.treeObj.element);
            let selectedNodeEle: HTMLElement = closest(selcetedEle, '.' + CLS.LIST_PARENT).parentElement;
            this.treeObj.selectedNodes = [selectedNodeEle.getAttribute('data-uid')];
            this.treeObj.dataBind();
        }
        this.updateTree(args);
    }

    private onRefreshEnd(args: ReadArgs): void {
        this.updateTree(args);
    }

    private onRenameInit(): void {
        if (this.parent.activeModule === 'navigationpane') {
            this.updateRenameData();
        }
    }

    /* istanbul ignore next */
    private onRenameEnd(): void {
        if (this.parent.breadcrumbbarModule.searchObj.element.value === '') {
            this.treeObj.updateNode(this.parent.renamedNodeId, this.parent.renameText);
            this.parent.renamedNodeId = null;
        } else {
            let resultData: Object[] = new DataManager(this.treeObj.getTreeData()).
                executeLocal(new Query().where(this.treeObj.fields.text, 'equal', this.parent.currentItemText, false));
            if (resultData.length > 0) {
                let data: Object[] = new DataManager(resultData).
                    executeLocal(new Query().where('filterPath', 'equal', this.parent.filterPath, false));
                if (data.length > 0) {
                    this.treeObj.updateNode(getValue(this.treeObj.fields.id, data[0]), this.parent.renameText);
                }
            }
        }
    }

    private onPropertyChanged(e: NotifyArgs): void {
        if (e.module !== this.getModuleName() && e.module !== 'common') {
            /* istanbul ignore next */
            return;
        }
        for (let prop of Object.keys(e.newProp)) {
            switch (prop) {
                case 'allowDragAndDrop':
                    this.addDragDrop();
                    break;
                case 'navigationPaneSettings':
                    read(this.parent, events.finalizeEnd, '/');
                    break;
            }
        }
    }

    /* istanbul ignore next */
    private onDownLoadInit(): void {
        this.doDownload();
    }

    private onSelectionChanged(e: NotifyArgs): void {
        this.treeObj.selectedNodes = [e.selectedNode];
    }

    private onClearPathInit(e: NotifyArgs): void {
        this.removeChildNodes(e.selectedNode);
    }

    private onDragEnd(args: ReadArgs): void {
        let moveNames: string[] = [];
        if (this.parent.isPasteError || this.parent.isSearchDrag) {
            moveNames = this.getMoveNames(args.files, this.parent.isSearchDrag, this.parent.dragPath);
        } else {
            moveNames = this.moveNames;
        }
        this.treeObj.removeNodes(moveNames);
    }
    private getMoveNames(files: { [key: string]: Object; }[], flag: boolean, path: string): string[] {
        let moveNames: string[] = [];
        for (let i: number = 0; i < files.length; i++) {
            if (!files[i].isFile) {
                let name: string = <string>(files[i].previousName);
                if (flag) {
                    path = path + files[i].previousName;
                    let index: number = path.lastIndexOf('/');
                    name = path.substring(index + 1);
                    path = path.substring(0, index + 1);
                }
                let resultData: Object[] = new DataManager(this.treeObj.getTreeData()).
                    executeLocal(new Query().where(this.treeObj.fields.text, 'equal', name, false));
                for (let j: number = 0; j < resultData.length; j++) {
                    let fPath: string = getValue('filterPath', resultData[j]);
                    fPath = fPath.replace(/\\/g, '/');
                    if (fPath === path) {
                        moveNames.push(getValue(this.treeObj.fields.id, resultData[j]));
                        break;
                    }
                }
            }
        }
        return moveNames;
    }

    private onCutEnd(args: ReadArgs): void {
        let moveNames: string[] = [];
        if (this.parent.isPasteError || this.parent.isSearchCut) {
            this.moveNames = this.getMoveNames(args.files, this.parent.isSearchCut, this.parent.targetPath);
        } else {
            moveNames = this.moveNames;
        }
        this.treeObj.removeNodes(moveNames);
    }
    private selectResultNode(resultObj: object): void {
        let path: string = getValue('filterPath', resultObj);
        let itemname: string = getValue('name', resultObj);
        let data: Object[] = new DataManager(this.treeObj.getTreeData()).
            executeLocal(new Query().where(this.treeObj.fields.text, 'equal', itemname, false));
        if (data.length > 0) {
            let resultData: Object[] = new DataManager(data).
                executeLocal(new Query().where('filterPath', 'equal', path, false));
            if (resultData.length > 0) {
                let id: string = getValue(this.treeObj.fields.id, resultData[0]);
                this.treeObj.selectedNodes = [id];
            }
        }
    }
    private onDropPath(args: ReadArgs): void {
        this.onpasteEnd(args);
        let pathObj: object = getValue(this.parent.path, this.parent.feParent);
        this.selectResultNode(pathObj);
        this.parent.isDropEnd = !this.parent.isPasteError;
    }

    private onpasteEnd(args: ReadArgs): void {
        let name: string = getValue('name', args.cwd);
        let path: string = getValue('filterPath', args.cwd);
        let resultData: Object[] = new DataManager(this.treeObj.getTreeData()).
            executeLocal(new Query().where(this.treeObj.fields.text, 'equal', name, false));
        if (resultData.length > 0) {
            let data: Object[] = new DataManager(resultData).
                executeLocal(new Query().where('filterPath', 'equal', path, false));
            if (data.length > 0) {
                let id: string = getValue(this.treeObj.fields.id, data[0]);
                let toExpand: boolean = this.treeObj.expandedNodes.indexOf(id) === -1;
                this.removeChildNodes(id);
                setValue(getDirectoryPath(args), args.files, this.parent.feFiles);
                this.addChild(args.files, id, toExpand);
            }
        }
        this.parent.expandedId = null;
        this.onPathChanged(args);
        if (this.parent.isDragDrop) { this.checkDropPath(args); }
    }

    private checkDropPath(args: ReadArgs): void {
        if ((this.parent.dropPath.indexOf(getDirectoryPath(args)) === -1)) {
            this.parent.isDropEnd = false;
            readDropPath(this.parent);
        } else {
            this.parent.isDropEnd = !this.parent.isPasteError;
        }
    }

    private onpasteInit(): void {
        if (this.parent.activeModule === this.getModuleName()) {
            this.updateItemData();
        }
        this.moveNames = [];
        let obj: object[] = this.parent.isDragDrop ? this.parent.dragData : this.parent.actionRecords;
        for (let i: number = 0; i < obj.length; i++) {
            if (getValue('isFile', obj[i]) === false) {
                this.moveNames.push(getValue('_fm_id', obj[i]));
            }
        }
    }
    private oncutCopyInit(): void {
        if (this.parent.activeModule === this.getModuleName()) {
            this.parent.activeRecords = this.getTreeData(this.treeObj.selectedNodes[0]);
            this.parent.activeElements = [this.activeNode];
        }
    }

    private addEventListener(): void {
        this.parent.on(events.modelChanged, this.onPropertyChanged, this);
        this.parent.on(events.downloadInit, this.onDownLoadInit, this);
        this.parent.on(events.initialEnd, this.onInitialEnd, this);
        this.parent.on(events.finalizeEnd, this.onFinalizeEnd, this);
        this.parent.on(events.pathChanged, this.onPathChanged, this);
        this.parent.on(events.pasteEnd, this.onpasteEnd, this);
        this.parent.on(events.cutEnd, this.onCutEnd, this);
        this.parent.on(events.pasteInit, this.onpasteInit, this);
        this.parent.on(events.nodeExpand, this.onNodeExpanded, this);
        this.parent.on(events.createEnd, this.onCreateEnd, this);
        this.parent.on(events.selectedData, this.onSelectedData, this);
        this.parent.on(events.deleteInit, this.onDeleteInit, this);
        this.parent.on(events.deleteEnd, this.onDeleteEnd, this);
        this.parent.on(events.refreshEnd, this.onRefreshEnd, this);
        this.parent.on(events.updateTreeSelection, this.onSelectionChanged, this);
        this.parent.on(events.openInit, this.onOpenInit, this);
        this.parent.on(events.openEnd, this.onOpenEnd, this);
        this.parent.on(events.destroy, this.destroy, this);
        this.parent.on(events.renameInit, this.onRenameInit, this);
        this.parent.on(events.renameEnd, this.onRenameEnd, this);
        this.parent.on(events.clearPathInit, this.onClearPathInit, this);
        this.parent.on(events.cutCopyInit, this.oncutCopyInit, this);
        this.parent.on(events.dropInit, this.onDropInit, this);
        this.parent.on(events.menuItemData, this.onMenuItemData, this);
        this.parent.on(events.dragEnd, this.onDragEnd, this);
        this.parent.on(events.dragging, this.onDragging, this);
        this.parent.on(events.dropPath, this.onDropPath, this);
        this.parent.on(events.detailsInit, this.onDetailsInit, this);
        this.parent.on(events.pathDrag, this.onPathDrag, this);
    }

    private removeEventListener(): void {
        this.parent.off(events.initialEnd, this.onInitialEnd);
        this.parent.off(events.downloadInit, this.onDownLoadInit);
        this.parent.off(events.finalizeEnd, this.onFinalizeEnd);
        this.parent.off(events.selectedData, this.onSelectedData);
        this.parent.off(events.modelChanged, this.onPropertyChanged);
        this.parent.off(events.pathChanged, this.onPathChanged);
        this.parent.off(events.pasteEnd, this.onpasteEnd);
        this.parent.off(events.cutEnd, this.onCutEnd);
        this.parent.off(events.pasteInit, this.onpasteInit);
        this.parent.off(events.updateTreeSelection, this.onSelectionChanged);
        this.parent.off(events.nodeExpand, this.onNodeExpanded);
        this.parent.off(events.createEnd, this.onCreateEnd);
        this.parent.off(events.refreshEnd, this.onRefreshEnd);
        this.parent.off(events.openInit, this.onOpenInit);
        this.parent.off(events.openEnd, this.onOpenEnd);
        this.parent.off(events.destroy, this.destroy);
        this.parent.off(events.renameInit, this.onRenameInit);
        this.parent.off(events.renameEnd, this.onRenameEnd);
        this.parent.off(events.clearPathInit, this.onClearPathInit);
        this.parent.off(events.deleteInit, this.onDeleteInit);
        this.parent.off(events.deleteEnd, this.onDeleteEnd);
        this.parent.off(events.cutCopyInit, this.oncutCopyInit);
        this.parent.off(events.dropInit, this.onDropInit);
        this.parent.off(events.dragEnd, this.onDragEnd);
        this.parent.off(events.dragging, this.onDragging);
        this.parent.off(events.dropPath, this.onDropPath);
        this.parent.off(events.detailsInit, this.onDetailsInit);
        this.parent.off(events.menuItemData, this.onMenuItemData);
        this.parent.off(events.pathDrag, this.onPathDrag);
    }

    /* istanbul ignore next */
    private onDetailsInit(): void {
        if (this.parent.activeModule === this.getModuleName()) {
            let dataobj: Object[] = this.getTreeData(this.treeObj.selectedNodes[0]);
            this.parent.itemData = dataobj;
        }
    }
    private onMenuItemData(args: { [key: string]: Object; }): void {
        if (this.parent.activeModule === this.getModuleName()) {
            let liEle: Element = closest(<Element>args.target, 'li');
            this.parent.itemData = this.getTreeData(liEle.getAttribute('data-uid'));
        }
    }

    /* istanbul ignore next */
    private onDragging(args: DragEventArgs): void {
        let ele: Element = closest(args.target, 'li');
        if (ele.classList.contains('e-node-collapsed')) {
            this.isDrag = true;
            let level: number = parseInt(ele.getAttribute('aria-level'), 10);
            this.treeObj.expandAll([ele.getAttribute('data-uid')], level + 1);
            this.isDrag = false;
        }
    }

    private onDropInit(args: DragEventArgs): void {
        if (this.parent.targetModule === this.getModuleName()) {
            let dropLi: Element = closest(args.target, 'li');
            let uid: string = dropLi.getAttribute('data-uid');
            /* istanbul ignore next */
            if (uid !== this.parent.pathId[0]) {
                let info: { [key: string]: Object; } = <{ [key: string]: Object; }>this.getTreeData(dropLi)[0];
                this.parent.dropPath = ((<string>info.filterPath).replace(/\\/g, '/') + <string>info.name + '/');
                this.parent.dropData = this.getTreeData(uid)[0];
            } else {
                this.parent.dropPath = '/';
                this.parent.dropData = getValue(this.parent.dropPath, this.parent.feParent);
            }
        }
    }

    /**
     * For internal use only - Get the module name.
     * @private
     */
    private getModuleName(): string {
        return 'navigationpane';
    }

    public destroy(): void {
        if (this.parent.isDestroyed) { return; }
        this.removeEventListener();
        if (this.treeObj) {
            this.unWireEvents();
            this.treeObj.destroy();
        }
    }
    private wireEvents(): void {
        this.keyboardModule = new KeyboardEvents(
            this.treeObj.element,
            {
                keyAction: this.keyDown.bind(this),
                keyConfigs: this.keyConfigs,
                eventName: 'keydown',
            }
        );
    }

    private unWireEvents(): void {
        this.keyboardModule.destroy();
    }

    /* istanbul ignore next */
    private keyDown(e: KeyboardEventArgs): void {
        let action: string = e.action;
        switch (action) {
            case 'altEnter':
                this.parent.notify(events.detailsInit, {});
                GetDetails(this.parent, [], this.parent.path, 'details');
                break;
            case 'esc':
                removeActive(this.parent);
                break;
            case 'del':
                this.updateItemData();
                if (!hasEditAccess(this.parent.itemData[0])) {
                    createDeniedDialog(this.parent, this.parent.itemData[0]);
                } else {
                    this.removeNodes = [];
                    createDialog(this.parent, 'Delete');
                }
                break;
            case 'ctrlC':
                copyFiles(this.parent);
                break;
            case 'ctrlV':
                this.parent.folderPath = '';
                pasteHandler(this.parent);
                break;
            case 'ctrlX':
                cutFiles(this.parent);
                break;
            case 'shiftF10':
                this.updateItemData();
                if (!hasDownloadAccess(this.parent.itemData[0])) {
                    createDeniedDialog(this.parent, this.parent.itemData[0]);
                    return;
                }
                if (this.parent.selectedItems.length !== 0) {
                    this.doDownload();
                }
                break;
            case 'f2':
                if (this.parent.selectedItems.length === 0) {
                    let data: Object = this.getTreeData(this.treeObj.selectedNodes[0])[0];
                    if (!hasEditAccess(data)) {
                        createDeniedDialog(this.parent, data);
                    } else {
                        this.updateRenameData();
                        createDialog(this.parent, 'Rename');
                    }
                }
                break;
        }
    }

    private getTreeData(args: string | Element): object[] {
        let data: object[] = this.treeObj.getTreeData(args);
        for (let i: number = 0; i < data.length; i++) {
            if (isNOU(getValue('hasChild', data[i]))) { setValue('hasChild', false, data[i]); }
        }
        return data;
    }

    private updateRenameData(): void {
        this.updateItemData();
        this.parent.currentItemText = getValue('name', this.parent.itemData[0]);
    }

    private updateItemData(): void {
        let data: Object = this.getTreeData(this.treeObj.selectedNodes[0])[0];
        this.parent.itemData = [data];
        this.parent.isFile = false;
    }

    private updateActionData(): void {
        this.updateItemData();
        let newPath: string = getParentPath(this.parent);
        this.parent.setProperties({ path: newPath }, true);
    }
    /* istanbul ignore next */
    private doDownload(): void {
        let newPath: string = getParentPath(this.parent);
        let itemId: string = this.treeObj.selectedNodes[0];
        let name: string = (itemId === this.parent.pathId[0]) ? '' : getValue('name', this.parent.itemData[0]);
        Download(this.parent, newPath, [name]);
    }
}