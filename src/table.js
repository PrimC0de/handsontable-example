import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import './cell.css';

registerAllModules();
const columnHeaders = [
    ['Model Name','Order Confirmation October (2024)',{ label: 'October 2024 (N2)', colspan: 3 }, { label: 'November 2024 (N3)', colspan: 3 }, { label: 'December 2024 (N4)', colspan: 3 }],
    [
        '','','Forecast WS (Oct)', 'Forecast RS (Oct)', 'Final Allocation (Oct)',
    'Forecast WS (Nov)', 'Forecast RS (Nov)', 'Final Allocation (Nov)',
    'Forecast WS (Dec)', 'Forecast RS (Dec)', 'Final Allocation (Dec)'
    ]
  ];
// const rowHeaders = ['Model Name', '115DB STD', '115 SDB FLEXICAB L', '115SDBL STD', '115SDBL PRIMCAB L'];
// const columnWidths = [100,100,100,100,100,100,100,100,100,100]
// const rowHeights = [200]
// const rowHeaderWidth = 200
const n = 0
const targetRed = [n + 2, n + 3, n + 5, n + 6, n + 8, n + 9];
const targetBlue = [4,7,10]
const data = [
        ['115SDB STD', '1', '15', '2', '', '', '','', '','','',''],
        ['115 SDB PRIMECAB', '', '-', '', '1.0', '1', '','1', '1','1','1'],
        ['115SDB L STD', '', '-', '', '', '', '','1', '','1','1',''],
        ['115SDBL PRIMECAB L', '', '-', '', '', '', '', '', ''],
        ['115SD STD', '', '-', '', '', '1', '1', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['115SDR STD', '', '1', '2'],
        ['115SDL STD', '','2', '2'],
        ['115LD STD', '' , '-'],
        ['115HD STD', '3','2'],
        ['136MD STD', '-'],
        ['136MDL STD', '-','3'],
        ['136MDB L STD','-'],
        ['136HDL 5.8', '-'],
        ['136HDL 6.4', '-'],
        ['136HDL 4X4','-'],
        ['136HD 6.4', '-'],
        ['136HDX 5.8', '-'],
        ['136HDX 5.8 PTO'],
        ['136HDX MIXER'],
        ['136 HD Plantation'],
        ['136HD 6.8'],
        ['136HDX 6.8'],
        ['136HDX 6.8 PTO'],
        ['136HDX 4X4'],
        ['136HDX LSD'],
        ['136 HDX Plantation 5.8 PTO'],
        ['GB150 5.1'],
        ['GB150 5.5'],
        ['GB150 AT 5.1'],
        ['GB150 AT 5.8'],
        ['GB150L 5.1'],
        ['GB150L 5.5'],
        ['GB150L AT 5.1'],
        ['GB150L AT 5.8'],
        ['FG 260 TH'],
        ['FG 260 JK'],
        ['FG 260 JK ABS'],
        ['FG 260 JL'],
        ['FG 260 JP'],
        ['FG 260 JS'],
        ['FG 260 JU'],
        ['FG 260 JJ'],
        ['FG 260 JM'],
        ['FMX 280 TH ABS'],
        ['FG 240 JP'],
        ['FL 260 JN'],
        ['FL 260 JN ABS'],
        ['FL 260 JW (EIV)'],
        ['FL 260 JW ABS'],
        ['FL 280 JT'],
        ['FMX 280 TH'],
        ['FLE 260 JW'],
        ['FLX 280 JW'],
        ['FL 280 JW'],
        ['FM 260 JD'],
        ['FM 280 TH'],
        ['FM 280 JM'],
        ['FM 280 TH ABS'],
        ['FM 280 JD'],
        ['FM 280 JD ABS'],
        ['FM 280 JD MINING'],
        ['FM 280 JW'],
        ['FM 280 JL'],
        ['FM 340 TH'],
        ['FM 340 TH ABS'],
        ['FM 340 TH'],
        ['FM 340 TH ABS'],
        ['FM 340 PL MINING'],
        ['FM 340 PL MINING'],
        ['FM 340 PD MINING'],
        ['FM 340 PD MINING'],
        ['SG 280 TH'],
        ['SG 280 TH ABS'],
        ['AK 240 STD'],
        ['RK280 STD'],
        ['RK280 ABS'],
        ['RM 280'],
        ['RM280 ABS'],
        ['Total CAT2','1','23','26','1','2','1','1','1','2','1'],
        ['Total CAT3','1','28','65','0','0','0','0','1','2','1']       
]

const cellStyleConfig = (row, col) => {
    const cellProperties = {};
    //apparently pakai ini bisa, sedangkan css cant
    //warnain selain header
    if (col === n){
        cellProperties.renderer = (instance, td) => {
            td.style.backgroundColor = '#C6E0B3ff'; //green
            td.style.color = 'black'; 
            td.innerText = instance.getDataAtCell(row, col);
          };     
    }
    else if (col === 1){
        cellProperties.renderer = (instance, td) => {
            td.style.backgroundColor = '#FFF2CDff'; //yellow
            td.style.color = '#333'; 
            td.innerText = instance.getDataAtCell(row, col);
          };
    }
    else if (targetRed.includes(col)){
        cellProperties.renderer = (instance, td) => {
            td.style.backgroundColor = '#F8CBACff'; //red
            td.style.color = '#333'; 
            td.innerText = instance.getDataAtCell(row, col);
          };
    }
    else if (targetBlue.includes(col)){
        cellProperties.renderer = (instance, td) => {
            td.style.backgroundColor = '#DBEBF7ff'; //blue
            td.style.color = '#333'; 
            td.innerText = instance.getDataAtCell(row, col);
          };
    }
    
    return cellProperties;
}

const ExampleComponent = () => {
    const afterGetColHeader = ( row, TH) => {
        const text = TH.textContent || TH.innerText;
        //warnain header
        if (row === 2 || row === 5 || row === 8) {
            TH.style.backgroundColor = '#C6E0B3ff'; //green
            TH.style.color = 'black';
           }

        if (text.includes("Forecast")) {
            TH.style.backgroundColor = '#F8CBACff'; //red
            TH.style.color = 'red';
          } 
        
        if (text.includes("Final Allocation")) {
            TH.style.backgroundColor = '#DBEBF7ff'; //blue
            TH.style.color = 'black';
        }
        if (row === 0) {
          TH.style.backgroundColor = '#C6E0B3ff'; //green
          TH.style.color = 'red'; 
        } 
        else if (row === 1) {
          TH.style.backgroundColor = '#FFF2CDff'; //yellow
          TH.style.color = 'red'; 
        } 
        // else if (row === 2 || row === 5 || row === 8) {
        //   TH.style.backgroundColor = '#C6E0B3ff'; //green
        //   TH.style.color = 'black';
        //  }
      };
      const afterGetRowHeader = ( row, TH) => {
        //warnain header
        // if (row === 1) {
        //   TH.style.backgroundColor = 'green'; 
        //   TH.style.color = '#333'; 
        // } 
        // else if (row === 1) {
        //   TH.style.backgroundColor = '#4CAF50'; 
        //   TH.style.color = 'white'; 
        // } else if (row === 2) {
        //   TH.style.backgroundColor = '#4CAF50'; 
        //   TH.style.color = 'white';
        // }
      };
  return (
    <HotTable
      data={data}
    //   rowHeaders={rowHeaders}
      nestedHeaders={columnHeaders}
      //colWidths={columnWidths}
      //rowHeaderWidth={rowHeaderWidth}
      cells={(row, col) => cellStyleConfig(row, col)}
      afterGetColHeader={afterGetColHeader}
     // afterGetRowHeader={afterGetRowHeader}
      licenseKey="non-commercial-and-evaluation" 
    />
  );
};

export default ExampleComponent;