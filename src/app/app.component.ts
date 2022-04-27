import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ExampleBasicTableDataSource } from './example-data-sources/example-basic-table-data-source';
import { ExampleHttpTableDataSource } from './example-data-sources/example-http-table-data-source';
import {
  PeriodicElement,
  PeriodicElementColumnKeys,
} from './types/periodic-elements';
import { TableColumn } from './table-view/table-column';
import { TABLE_COLUMN_TYPES } from './table-view/table-column-types-token';
import { TABLE_VIEW_DEFAULT_COLUMN_TYPES } from './table-view/table-view-default-column-types';
import { TableViewButtonColumnComponent } from './table-view-button-column/table-view-button-column.component';
import { TableViewButtonColumnModule } from './table-view-button-column/table-view-button-column.module';

// This file represents an implementation of the component

const ELEMENT_DATA: readonly PeriodicElement[] = [
  { name: 'Hydrogen', symbol: 'H', position: 1, weight: 1.00794 },
  { name: 'Helium', symbol: 'He', position: 2, weight: 4.002602 },
  { name: 'Lithium', symbol: 'Li', position: 3, weight: 6.941 },
  { name: 'Beryllium', symbol: 'Be', position: 4, weight: 9.01218 },
  { name: 'Boron', symbol: 'B', position: 5, weight: 10.811 },
  { name: 'Carbon', symbol: 'C', position: 6, weight: 12.011 },
  { name: 'Nitrogen', symbol: 'N', position: 7, weight: 14.00674 },
  { name: 'Oxygen', symbol: 'O', position: 8, weight: 15.9994 },
  { name: 'Fluorine', symbol: 'F', position: 9, weight: 18.998403 },
  { name: 'Neon', symbol: 'Ne', position: 10, weight: 20.1797 },
  { name: 'Sodium', symbol: 'Na', position: 11, weight: 22.989768 },
  { name: 'Magnesium', symbol: 'Mg', position: 12, weight: 24.305 },
  { name: 'Aluminum', symbol: 'Al', position: 13, weight: 26.981539 },
  { name: 'Silicon', symbol: 'Si', position: 14, weight: 28.0855 },
  { name: 'Phosphorus', symbol: 'P', position: 15, weight: 30.973762 },
  { name: 'Sulfur', symbol: 'S', position: 16, weight: 32.066 },
  { name: 'Chlorine', symbol: 'Cl', position: 17, weight: 35.4527 },
  { name: 'Argon', symbol: 'Ar', position: 18, weight: 39.948 },
  { name: 'Potassium', symbol: 'K', position: 19, weight: 39.0983 },
  { name: 'Calcium', symbol: 'Ca', position: 20, weight: 40.078 },
  { name: 'Scandium', symbol: 'Sc', position: 21, weight: 44.95591 },
  { name: 'Titanium', symbol: 'Ti', position: 22, weight: 47.88 },
  { name: 'Vanadium', symbol: 'V', position: 23, weight: 50.9415 },
  { name: 'Chromium', symbol: 'Cr', position: 24, weight: 51.9961 },
  { name: 'Manganese', symbol: 'Mn', position: 25, weight: 54.93805 },
  { name: 'Iron', symbol: 'Fe', position: 26, weight: 55.847 },
  { name: 'Cobalt', symbol: 'Co', position: 27, weight: 58.9332 },
  { name: 'Nickel', symbol: 'Ni', position: 28, weight: 58.6934 },
  { name: 'Copper', symbol: 'Cu', position: 29, weight: 63.546 },
  { name: 'Zinc', symbol: 'Zn', position: 30, weight: 65.39 },
  { name: 'Gallium', symbol: 'Ga', position: 31, weight: 69.723 },
  { name: 'Germanium', symbol: 'Ge', position: 32, weight: 72.61 },
  { name: 'Arsenic', symbol: 'As', position: 33, weight: 74.92159 },
  { name: 'Selenium', symbol: 'Se', position: 34, weight: 78.96 },
  { name: 'Bromine', symbol: 'Br', position: 35, weight: 79.904 },
  { name: 'Krypton', symbol: 'Kr', position: 36, weight: 83.8 },
  { name: 'Rubidium', symbol: 'Rb', position: 37, weight: 85.4678 },
  { name: 'Strontium', symbol: 'Sr', position: 38, weight: 87.62 },
  { name: 'Yttrium', symbol: 'Y', position: 39, weight: 88.90585 },
  { name: 'Zirconium', symbol: 'Zr', position: 40, weight: 91.224 },
  { name: 'Niobium', symbol: 'Nb', position: 41, weight: 92.90638 },
  { name: 'Molybdenum', symbol: 'Mo', position: 42, weight: 95.94 },
  { name: 'Technetium', symbol: 'Tc', position: 43, weight: 97.9072 },
  { name: 'Ruthenium', symbol: 'Ru', position: 44, weight: 101.07 },
  { name: 'Rhodium', symbol: 'Rh', position: 45, weight: 102.9055 },
  { name: 'Palladium', symbol: 'Pd', position: 46, weight: 106.42 },
  { name: 'Silver', symbol: 'Ag', position: 47, weight: 107.8682 },
  { name: 'Cadmium', symbol: 'Cd', position: 48, weight: 112.411 },
  { name: 'Indium', symbol: 'In', position: 49, weight: 114.818 },
  { name: 'Tin', symbol: 'Sn', position: 50, weight: 118.71 },
  { name: 'Antimony', symbol: 'Sb', position: 51, weight: 121.76 },
  { name: 'Tellurium', symbol: 'Te', position: 52, weight: 127.6 },
  { name: 'Iodine', symbol: 'I', position: 53, weight: 126.90447 },
  { name: 'Xenon', symbol: 'Xe', position: 54, weight: 131.29 },
  { name: 'Cesium', symbol: 'Cs', position: 55, weight: 132.90543 },
  { name: 'Barium', symbol: 'Ba', position: 56, weight: 137.327 },
  { name: 'Lanthanum', symbol: 'La', position: 57, weight: 138.9055 },
  { name: 'Cerium', symbol: 'Ce', position: 58, weight: 140.115 },
  { name: 'Praseodymium', symbol: 'Pr', position: 59, weight: 140.90765 },
  { name: 'Neodymium', symbol: 'Nd', position: 60, weight: 144.24 },
  { name: 'Promethium', symbol: 'Pm', position: 61, weight: 144.9127 },
  { name: 'Samarium', symbol: 'Sm', position: 62, weight: 150.36 },
  { name: 'Europium', symbol: 'Eu', position: 63, weight: 151.965 },
  { name: 'Gadolinium', symbol: 'Gd', position: 64, weight: 157.25 },
  { name: 'Terbium', symbol: 'Tb', position: 65, weight: 158.92534 },
  { name: 'Dysprosium', symbol: 'Dy', position: 66, weight: 162.5 },
  { name: 'Holmium', symbol: 'Ho', position: 67, weight: 164.93032 },
  { name: 'Erbium', symbol: 'Er', position: 68, weight: 167.26 },
  { name: 'Thulium', symbol: 'Tm', position: 69, weight: 168.93421 },
  { name: 'Ytterbium', symbol: 'Yb', position: 70, weight: 173.04 },
  { name: 'Lutetium', symbol: 'Lu', position: 71, weight: 174.967 },
  { name: 'Hafnium', symbol: 'Hf', position: 72, weight: 178.49 },
  { name: 'Tantalum', symbol: 'Ta', position: 73, weight: 180.9479 },
  { name: 'Tungsten', symbol: 'W', position: 74, weight: 183.84 },
  { name: 'Rhenium', symbol: 'Re', position: 75, weight: 186.207 },
  { name: 'Osmium', symbol: 'Os', position: 76, weight: 190.23 },
  { name: 'Iridium', symbol: 'Ir', position: 77, weight: 192.22 },
  { name: 'Platinum', symbol: 'Pt', position: 78, weight: 195.08 },
  { name: 'Gold', symbol: 'Au', position: 79, weight: 196.96654 },
  { name: 'Mercury', symbol: 'Hg', position: 80, weight: 200.59 },
  { name: 'Thallium', symbol: 'Tl', position: 81, weight: 204.3833 },
  { name: 'Lead', symbol: 'Pb', position: 82, weight: 207.2 },
  { name: 'Bismuth', symbol: 'Bi', position: 83, weight: 208.98037 },
  { name: 'Polonium', symbol: 'Po', position: 84, weight: 208.9824 },
  { name: 'Astatine', symbol: 'At', position: 85, weight: 209.9871 },
  { name: 'Radon', symbol: 'Rn', position: 86, weight: 222.0176 },
  { name: 'Francium', symbol: 'Fr', position: 87, weight: 223.0197 },
  { name: 'Radium', symbol: 'Ra', position: 88, weight: 226.0254 },
  { name: 'Actinium', symbol: 'Ac', position: 89, weight: 227.0278 },
  { name: 'Thorium', symbol: 'Th', position: 90, weight: 232.0381 },
  { name: 'Protactinium', symbol: 'Pa', position: 91, weight: 231.03588 },
  { name: 'Uranium', symbol: 'U', position: 92, weight: 238.0289 },
  { name: 'Neptunium', symbol: 'Np', position: 93, weight: 237.048 },
  { name: 'Plutonium', symbol: 'Pu', position: 94, weight: 244.0642 },
  { name: 'Americium', symbol: 'Am', position: 95, weight: 243.0614 },
  { name: 'Curium', symbol: 'Cm', position: 96, weight: 247.0703 },
  { name: 'Berkelium', symbol: 'Bk', position: 97, weight: 247.0703 },
  { name: 'Californium', symbol: 'Cf', position: 98, weight: 251.0796 },
  { name: 'Einsteinium', symbol: 'Es', position: 99, weight: 252.083 },
  { name: 'Fermium', symbol: 'Fm', position: 100, weight: 257.0951 },
  { name: 'Mendelevium', symbol: 'Md', position: 101, weight: 258.1 },
  { name: 'Nobelium', symbol: 'No', position: 102, weight: 259.1009 },
  { name: 'Lawrencium', symbol: 'Lr', position: 103, weight: 262.11 },
];

const COLUMN_DATA: readonly TableColumn<
  PeriodicElement,
  PeriodicElementColumnKeys
>[] = [
  {
    type: 'text',
    key: 'position',
    header: of(`Position`),
    cell: (row) => `${row.position}`,
  },
  {
    type: 'text',
    key: 'name',
    header: `Name`,
    cell: (row) => `${row.name}`,
  },
  {
    type: 'text',
    key: 'weight',
    header: `Weight`,
    cell: (row) => `${row.weight}`,
  },
  {
    type: 'button',
    key: 'symbol',
    header: `Symbol`,
    cell: (row) => `${row.symbol}`,
    click: (row) => {
      console.log('row:', row);
    },
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // This is where you can provide custom column types
  providers: [
    {
      provide: TABLE_COLUMN_TYPES,
      useValue: [
        ...TABLE_VIEW_DEFAULT_COLUMN_TYPES,
        {
          type: 'button',
          component: TableViewButtonColumnComponent,
          module: TableViewButtonColumnModule,
        },
      ],
    },
  ],
})
export class AppComponent implements OnInit {
  exampleDataSource = new ExampleBasicTableDataSource(
    COLUMN_DATA,
    ELEMENT_DATA
  );

  constructor(public exampleHttpDataSource: ExampleHttpTableDataSource) {}

  ngOnInit() {
    this.exampleDataSource.setDisplayedColumns([
      'position',
      'name',
      'symbol',
      'weight',
    ]);

    this.exampleHttpDataSource.setDisplayedColumns([
      'name',
      'position',
      'weight',
      'symbol',
    ]);
  }
}
