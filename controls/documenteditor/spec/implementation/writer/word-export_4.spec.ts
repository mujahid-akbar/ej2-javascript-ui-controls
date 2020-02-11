import { DocumentEditor } from '../../../src/document-editor/document-editor';
import { PageLayoutViewer, LayoutViewer } from '../../../src/document-editor/implementation/viewer/viewer';;
import { createElement } from '@syncfusion/ej2-base';
import { TestHelper } from '../../test-helper.spec';
import { Editor } from '../../../src/document-editor/implementation/editor/editor';
import { EditorHistory } from '../../../src/document-editor/implementation/editor-history/editor-history';
import { Selection } from '../../../src/document-editor/implementation/selection/selection';
import { WordExport } from '../../../src/document-editor/implementation/writer/word-export';
import { SfdtExport } from '../../../src/document-editor/implementation/writer/sfdt-export';


let chart:any={"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"chartLegend":{"position":"Bottom","chartTitleArea":{"fontName":"+mn-lt","fontSize":9,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"808080","rgb":"#808080"}}}},"chartTitleArea":{"fontName":"+mn-lt","fontSize":14,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"000000","rgb":"#000000"}}},"chartArea":{"foreColor":"#FFFFFFFF"},"plotArea":{"foreColor":"#000000FF"},"chartCategory":[{"chartData":[{"yValue":4.3},{"yValue":2.4},{"yValue":2}],"categoryXName":"Category 1"},{"chartData":[{"yValue":2.5},{"yValue":4.4},{"yValue":2}],"categoryXName":"Category 2"},{"chartData":[{"yValue":3.5},{"yValue":1.8},{"yValue":3}],"categoryXName":"Category 3"},{"chartData":[{"yValue":4.5},{"yValue":2.8},{"yValue":5}],"categoryXName":"Category 4"}],"chartSeries":[{"dataPoints":[{"fill":{"foreColor":"4472c4","rgb":"#4472c4"},"line":{"color":"000000","rgb":"#000000"}}],"seriesName":"Series 1","dataLabel":{"position":"Center","fontName":"+mn-lt","fontColor":"404040","fontSize":9,"isLegendKey":false,"isBubbleSize":false,"isCategoryName":false,"isSeriesName":false,"isValue":true,"isPercentage":false,"isLeaderLines":false}},{"dataPoints":[{"fill":{"foreColor":"ed7d31","rgb":"#ed7d31"},"line":{"color":"000000","rgb":"#000000"}}],"seriesName":"Series 2","dataLabel":{"position":"Center","fontName":"+mn-lt","fontColor":"404040","fontSize":9,"isLegendKey":false,"isBubbleSize":false,"isCategoryName":false,"isSeriesName":false,"isValue":true,"isPercentage":false,"isLeaderLines":false}},{"dataPoints":[{"fill":{"foreColor":"a5a5a5","rgb":"#a5a5a5"},"line":{"color":"000000","rgb":"#000000"}}],"seriesName":"Series 3","dataLabel":{"position":"Center","fontName":"+mn-lt","fontColor":"404040","fontSize":9,"isLegendKey":false,"isBubbleSize":false,"isCategoryName":false,"isSeriesName":false,"isValue":true,"isPercentage":false,"isLeaderLines":false}}],"chartPrimaryCategoryAxis":{"chartTitle":"X-Axis","chartTitleArea":{"fontName":"+mn-lt","fontSize":10,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"000000","rgb":"#000000"}}},"categoryType":"Automatic","fontSize":9,"fontName":"+mn-lt","numberFormat":"General","maximumValue":0,"minimumValue":0,"majorUnit":0,"hasMajorGridLines":false,"hasMinorGridLines":false,"majorTickMark":"TickMark_None","minorTickMark":"TickMark_None","tickLabelPosition":"TickLabelPosition_NextToAxis"},"chartPrimaryValueAxis":{"chartTitle":"Y-Axis","chartTitleArea":{"fontName":"+mn-lt","fontSize":10,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"000000","rgb":"#000000"}}},"fontSize":9,"fontName":"+mn-lt","maximumValue":14,"minimumValue":0,"majorUnit":2,"hasMajorGridLines":true,"hasMinorGridLines":false,"majorTickMark":"TickMark_None","minorTickMark":"TickMark_None","tickLabelPosition":"TickLabelPosition_NextToAxis"},"chartTitle":"Stacked Bar","chartType":"Bar_Stacked","gapWidth":150,"overlap":100,"height":252,"width":432},{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#000000","fontSizeBidi":11,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Balloon Text","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Normal","link":"Balloon Text Char"},{"name":"Balloon Text Char","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Default Paragraph Font"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":12,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[]};
describe('Word export module with charts', () => {
    let editor: DocumentEditor;
    beforeAll((): void => {
        document.body.appendChild(createElement('div', { id: 'container' }));
        DocumentEditor.Inject(Editor, Selection, WordExport, SfdtExport,EditorHistory);
       editor = new DocumentEditor({enableEditorHistory:true, enableWordExport: true, enableEditor: true, isReadOnly: false, enableSelection: true, enableSfdtExport: true });
        editor.acceptTab = true;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done): void => {
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        setTimeout(function () {
            document.body.innerHTML = '';
            done();
        }, 1000);
    });
    it('Chart Export', () => {
        editor.open(JSON.stringify(chart));
        expect(()=>{editor.save('chart', 'Docx');}).not.toThrowError();
    });
});

let lineSpacingDocument: any = {"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"lineSpacing":30,"lineSpacingType":"Exactly","styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"This is new feature include in mac book pro. Check the details on "},{"characterFormat":{},"fieldType":0},{"characterFormat":{},"text":"HYPERLINK \"http://www.apple.co.in\" "},{"characterFormat":{},"fieldType":2},{"characterFormat":{"styleName":"Hyperlink"},"text":"www.apple.co.in"},{"characterFormat":{},"fieldType":1},{"characterFormat":{},"text":"  website. "},{"characterFormat":{},"text":"This is new "},{"characterFormat":{},"text":"feature include in mac book pro. Check the details on "},{"characterFormat":{},"fieldType":0},{"characterFormat":{},"text":"HYPERLINK \"http://www.apple.co.in\" "},{"characterFormat":{},"fieldType":2},{"characterFormat":{"styleName":"Hyperlink"},"text":"www.apple.co.in"},{"characterFormat":{},"fieldType":1},{"characterFormat":{},"text":" "},{"characterFormat":{},"text":"website."},{"characterFormat":{},"text":" "},{"characterFormat":{},"text":"This is new feature "},{"characterFormat":{},"text":"include in mac book pro. Check the details on www.apple.co.in"},{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#000000","fontSizeBidi":11,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"enforcement":false,"hashValue":"","saltValue":"","formatting":false,"protectionType":"NoProtection","styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2F5496FF","fontSizeBidi":16,"fontFamilyBidi":"Times New Roman"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"List Paragraph","type":"Paragraph","paragraphFormat":{"leftIndent":36,"listFormat":{},"contextualSpacing":true},"characterFormat":{},"basedOn":"Normal"},{"name":"TOC Heading","type":"Paragraph","paragraphFormat":{"outlineLevel":"BodyText","listFormat":{}},"characterFormat":{},"basedOn":"Heading 1","next":"Normal"},{"name":"TOC 2","type":"Paragraph","paragraphFormat":{"leftIndent":11,"afterSpacing":5,"listFormat":{}},"characterFormat":{"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"TOC 1","type":"Paragraph","paragraphFormat":{"afterSpacing":5,"listFormat":{}},"characterFormat":{"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"TOC 3","type":"Paragraph","paragraphFormat":{"leftIndent":22,"afterSpacing":5,"listFormat":{}},"characterFormat":{"fontFamilyBidi":"Times New Roman"},"basedOn":"Normal","next":"Normal"},{"name":"Hyperlink","type":"Character","characterFormat":{"underline":"Single","fontColor":"#0563C1FF"},"basedOn":"Default Paragraph Font"},{"name":"Unresolved Mention","type":"Character","characterFormat":{"fontColor":"#605E5CFF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[]};

describe('Word export line spacing validation', () => {
    let editor: DocumentEditor;
    beforeAll((): void => {
        document.body.appendChild(createElement('div', { id: 'container' }));
        DocumentEditor.Inject(Editor, Selection, WordExport, SfdtExport,EditorHistory);
       editor = new DocumentEditor({enableEditorHistory:true, enableWordExport: true, enableEditor: true, isReadOnly: false, enableSelection: true, enableSfdtExport: true });
        editor.acceptTab = true;
        (editor.documentHelper as any).containerCanvasIn = TestHelper.containerCanvas;
        (editor.documentHelper as any).selectionCanvasIn = TestHelper.selectionCanvas;
        (editor.documentHelper.render as any).pageCanvasIn = TestHelper.pageCanvas;
        (editor.documentHelper.render as any).selectionCanvasIn = TestHelper.pageSelectionCanvas;
        editor.appendTo('#container');
    });
    afterAll((done): void => {
        editor.destroy();
        document.body.removeChild(document.getElementById('container'));
        editor = undefined;
        setTimeout(function () {
            document.body.innerHTML = '';
            done();
        }, 1000);
    });
    it('paragraph line spacing type check validation', () => {
        editor.open(JSON.stringify(lineSpacingDocument));
        expect(()=>{editor.save('lineSpacing', 'Docx');}).not.toThrowError();
        expect(editor.selection.start.paragraph.paragraphFormat.lineSpacing).toBe(30);
        expect(editor.selection.start.paragraph.paragraphFormat.lineSpacingType).toBe('Exactly');
    });
});
