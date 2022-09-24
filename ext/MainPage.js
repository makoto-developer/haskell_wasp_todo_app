import React from 'react'

import getTasks from '@wasp/queries/getTasks'
import {useQuery} from '@wasp/queries'

const MainPage = () => {
  const { data: tasks, isFetching, error } = useQuery(getTasks)

  return (
      <div>
        {tasks && <TasksList tasks={tasks} />}

        {isFetching && 'Fetching...'}
        {error && 'Error: ' + error}
      </div>
  )
}

const Task = (props) => (
    <div>
      <input
          type='checkbox' id={props.task.id}
          checked={props.task.isDone} readonly
      />
      {props.task.description}
    </div>
)

const TasksList = (props) => {
  if (!props.tasks?.length) return 'No tasks'
  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)
}

export default MainPage
