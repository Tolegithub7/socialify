async function TasksPage() {
    const response = await fetch("http://localhost:3000/api/tasks", {
        cache: "no-store",
    });
    const tasks = await response.json();
    console.log(tasks);
  return (
    <div>
      Tasks Page
    </div>
  )
}

export default TasksPage;

// async function TasksPage() {
//     const response = await fetch("http://localhost:3000/api/tasks");

//     if (!response.ok) {
//         console.error("Error fetching tasks:", response.status, response.statusText);
//         return <div>Error loading tasks.</div>;
//     }

//     try {
//         const tasks = await response.json();
//         console.log(tasks);
//         return <div>Tasks Page</div>;
//     } catch (error) {
//         console.error("JSON parsing error:", error);
//         return <div>Error parsing tasks.</div>;
//     }
// }

// export default TasksPage;
