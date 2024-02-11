import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
    const task = useLoaderData();
    const { _id, taskName } = task;
    const handleUpdateTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const taskName = form.taskName.value;
    
        const updatedTasks = { taskName };
        console.log(updatedTasks);

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount>0) {
                    toast('Updated Successfully!');
                }
                form.reset();
            })
        console.log(updatedTasks);
    };
    const handleToast = () => {
    };

    return (
        <div className='w-[50%] mx-auto bg-orange-200'>
          
            <form onSubmit={handleUpdateTask} className=' mb-12  '>
                <div className="my-28">
                    <h2 className='text-center text-teal-950 font-bold text-4xl'>Update Task</h2>

                    <div className=" p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Id :{_id}</span>
                            </label>
                            <input type="text" name='taskName'defaultValue={taskName}  placeholder="Add Your Task" className="input input-bordered" required />
                        </div>
                       
                        
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleToast} className="btn bg-teal-950 text-white hover:bg-teal-950">Update Task</button>
                        <Toaster />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;