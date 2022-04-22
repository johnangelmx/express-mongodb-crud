import Task from '../models/Task'


const renderTasks = async (req, res) => {
    const task = await Task.find().lean()
    res.render("index", { tasks: task });
}
const createTask = async (req, res) => {
    try {
        const task = Task(req.body)
        await task.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.redirect('/')

    }
}

const renderTaskEdit = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        console.log(task)
        res.render("edit", { task });
    } catch (error) {
        console.log(error)
    }
}
const editTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
}
const deleteTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
}
const toggleTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    task.done = !task.done
    await task.save()

    res.redirect('/')

}
export {
    renderTasks,
    createTask,
    renderTaskEdit,
    editTask,
    deleteTask,
    toggleTask
}