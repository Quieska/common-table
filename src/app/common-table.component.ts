import { Component, Input } from '@angular/core';

function compareNumeric(rowId: number, a: any, b: any) {
	if (a[rowId] > b[rowId]) return 1;
	if (a[rowId] < b[rowId]) return -1;
}

@Component({
	selector: 'common-table',
	styles: [`
		.common_table {
			width: 826px;
			border: 1px solid rgba(0,0,0,0.4);
			background-color: rgba(24,255,80,0.3);
		}
		.common_table thead {
			border-bottom: 2px solid rgb(0,0,0);
		}
		.common_table thead tr {
			cursor: pointer;
		}
		.common_table tbody .backlight {
			background-color: rgba(0,139,139,0.5);
		}
		.common_table td {
			text-align: center;
		}
		.table_item {
			padding: 5px;
			border-bottom: 1px solid rgba(0,0,0,0.4);
		}
		.table_item:last-child {
			border-bottom: none;
		}
		.card > div {
			display: inline-block;
			text-align: center;
			border-right: 1px solid rgba(0,0,0,0.2);
		}
		.card > div:last-child {
			border-right: none;
		}
		.card > .id {
			width: 50px;
		}
		.card > .name {
			width: 500px;
		}
		.card > .vram {
			width: 50px;
		}
		.card > .price {
			width: 200px;
		}
		
		.card > .name {
			flex-basis: 100px;
		}
	`],
	template: `
		<input
			[(ngModel)]="tableSearch"
			(keyup)="searchHandler($event)"
			placeholder="search in table.."/>
		<table class="common_table">
			<thead>
				<tr>
					<th *ngFor="let column of columns; let i = index;" (click)="clickHandler(i)">{{column}}</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let row of rows"
					[class.backlight]="isSearched(row)">
					<td *ngFor="let ro of row">
						{{ro}}
					</td>
				</tr>
			</tbody>
		</table>
	`
})

export class CommonTableComponent {
	@Input() rows: any[];
	@Input() columns: any[];
	sortedRow = {id: 0, direction: 0};

	tableSearch : '';
	foundRows:any = [];

	sorting(rowId: number) {

		if (this.sortedRow.id !== rowId) {
			console.log('FORWARD SORTING');
			this.sortedRow.id = rowId;
			this.sortedRow.direction++;

			this.rows.sort(compareNumeric.bind(this, rowId));
		} else {

			switch (this.sortedRow.direction) {
				case 1: {
					console.log('BACKWARD SORTING');
					this.sortedRow.direction++;
					this.rows.reverse();
					break;
				}
				default: {
					console.log('CLEAR SORTING');
					this.sortedRow.id = this.sortedRow.direction = 0;
					this.rows.sort(compareNumeric.bind(this, 0));
					break;
				}
			}

		}
	}

	isSearched(item: any) {
		
		if (this.foundRows.indexOf(item) > 0) {
			return true;
		} else {
			return false;
		}
	}

	searchHandler(event: any) {
		console.log(event.target.value);
		this.foundRows = [];

		this.rows.forEach(function(item: any) {
			if (item.indexOf(event.target.value) > 0) {
				this.foundRows.push(item);
			}
		}, this);
		console.log(this.foundRows);
	}

	clickHandler(rowId: number) {
		if ((rowId === 0) || (rowId === 1)) return;
		this.sorting(rowId);
	}
}
