import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { TaskComponent } from '../task/task.component';

import { PureTaskListComponent } from './pure-task-list.component';
import { WithPinnedTasks } from './pure-task-list.stories';
describe('TaskListComponent', () => {
  interface StringArray {
    [index: number]: string;
  }
  let myStrArr: StringArray;

  myStrArr = ['1', '2'];

  console.log('myStrArr', myStrArr);
  interface NumberDictionary {
    [index: string]: { message: string };
  }
  const foo: NumberDictionary = {};
  const foo2: { [index: string]: { message: string } } = {};
  foo2.a = { message: 'some message' };
  foo.a = { message: 'some message' };
  console.log('myNumbDict', foo);

  it('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        ...WithPinnedTasks.args,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});
