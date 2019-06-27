/**
 * Maps datalabel sample
 */
import { Maps, MapsTooltip, ILabelRenderingEventArgs, DataLabel, ILoadEventArgs, MapsTheme, SmartLabelMode, IntersectAction, MapAjax } from '../src/index';
import { usa } from './MapData/USA';
Maps.Inject(MapsTooltip, DataLabel);
let maps: Maps = new Maps({
    dataLabelRendering: (args: ILabelRenderingEventArgs) => {
        if (args.text === 'Alaska') {
            args.datalabel.visible = false;
        } else {
            args.datalabel.visible = true;
        }
    },
    zoomSettings: {
        enable: false
    },
    layers: [
        {
            dataLabelSettings: {
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            },
            shapeData: usa,
            shapeSettings: {
                autofill: true
            },
            tooltipSettings: {
                visible: true,
                valuePath: 'name'
            },
        }
    ]
});
maps.appendTo('#datalabel');