import { Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { TasksState } from '../state/task.state'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-inbox-screen',
    template: `
        <div><h4>app-inbox-screen</h4></div>
        <app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>
    `,
    styles: [
        `
            h4 {
                font-weight: normal;
                padding: 20px;
                background-color: white;
            }
        `,
    ],
})
export class InboxScreenComponent {
    @Select(TasksState.getError) error$: Observable<boolean>
}
