import { NgxsModule } from '@ngxs/store';
import { render } from '@testing-library/angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { PureTaskListComponent } from './components/task-list/pure-task-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksState } from './state/task.state';

describe('App', () => {
  test('should render the App component', async () => {
    const { getByText } = await render(AppComponent, {
      declarations: [
        InboxScreenComponent,
        PureInboxScreenComponent,
        TaskListComponent,
        PureTaskListComponent,
        TaskComponent,
      ],
      imports: [
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        NgxsModule.forFeature([TasksState]),
      ],
    });
    expect(getByText('app-component'));
  });
});
