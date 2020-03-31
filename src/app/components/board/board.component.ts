import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  boardColumns = [
    { id: "1321123", items: [{ id: "006055", value: "Task 1"}] },
    { id: "555665", items: [{ id: "00955", value: "Get so Paste" }, { id: "888092", value: "Get so soap" }]},
    { id: "09881" },
    { id: "0980001" },
  ]

  draggingTo = null;

  onDragOver(e) {
    if (e) {
        this.draggingTo = e.target;
    }
  }

  onDragEnd(e, item) {
    if (this.draggingTo.id != e.target.parentNode.id) {
        this.draggingTo.append(e.target);
        this.handleColumnSet(item);
    }
  }

  private handleColumnSet(target) {
    let newBoardClolmns = this.boardColumns.map(res => {
        if (res.id != this.draggingTo.id) {
           return {
             ...res,
             items: res.items ? res.items.filter(res => res.id != target.id) : [] 
           }
        } else {
            return {
               ...res,
               items: res.items ? [...res.items, target]  : [ target ]
            }
        }
    })
    this.boardColumns = newBoardClolmns;
  }
}
