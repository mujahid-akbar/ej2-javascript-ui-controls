/**
 * Pivot Field List Default Sample
 */

import { IDataSet } from '../../../src/base/engine';
import { pivot_dataset } from '../../../spec/base/datasource.spec';
import { PivotFieldList } from '../../../src/pivotfieldlist/base/field-list';
import { CalculatedField } from '../../../src/common/calculatedfield/calculated-field';
import { enableRipple } from '@syncfusion/ej2-base';
import { LoadEventArgs } from '../../../src/common/base/interface';

enableRipple(true);
PivotFieldList.Inject(CalculatedField);
//335 or 315
let fieldlist: PivotFieldList = new PivotFieldList({
    dataSourceSettings: {
        dataSource: pivot_dataset as IDataSet[],
        expandAll: false,
        enableSorting: true,
        sortSettings: [{ name: 'company', order: 'Descending' }],
        filterSettings: [{ name: 'name', type: 'Include', items: ['Knight Wooten'] },
        { name: 'company', type: 'Exclude', items: ['NIPAZ'] },
        { name: 'gender', type: 'Include', items: ['male'] }],
        calculatedFieldSettings: [{ name: 'price', formula: '(("Sum(balance)"*10^3+"Count(quantity)")/100)+"Sum(balance)"' },
        { name: 'total', formula: '"Sum(balance)"+"Sum(quantity)"' }],
        rows: [{ name: 'company' }, { name: 'state' }],
        columns: [{ name: 'name' }],
        values: [{ name: 'balance' }, { name: 'price', type: 'CalculatedField' },
        { name: 'quantity' }], filters: [{ name: 'gender' }]
    },
    allowCalculatedField: true,
    renderMode: 'Fixed',
    load: (args: LoadEventArgs) => {
        fieldlist.isAdaptive = true;
    }
});
fieldlist.appendTo('#FieldList');
