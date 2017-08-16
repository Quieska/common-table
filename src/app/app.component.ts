import { Component } from '@angular/core';

const COLUMNS = [
	'id', 'Название видеокарты', 'Объем оперативной памяти', 'Цена'
];

const ROWS = [
	[ 1, 'GTX760', 4, 10000 ],
	[ 2, 'Asus GeForce GTX 1080 Ti TURBO', 11, 49999 ],
	[ 3, 'GTX1070Ti', 8, 10000 ],
	[ 4, 'GTX1060', 8, 10000 ],
	[ 5, 'AMD Radeon Pro WX 7100', 8, 10000 ],
	[ 6, 'PNY Quadro P600', 2, 14999 ],
	[ 7, 'AMD Radeon Pro WX 4100', 4, 22799 ],
	[ 8, 'AMD FirePro W5100', 4, 24499 ],
	[ 9, 'MSI GeForce GTX 1060 OC', 6, 25999 ],
	[ 10, 'MSI GeForce GT 730', 4, 4950 ]
];

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<common-table [rows]='rows' [columns]='columns'></common-table>
	`,
})
export class AppComponent  {
	title = 'Graphic cards';
	columns = COLUMNS;
	rows = ROWS;
}
