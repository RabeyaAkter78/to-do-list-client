import toast, { Toaster } from 'react-hot-toast';

const AddATask = () => {
    const handleAddTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const taskName = form.taskName.value;
    
        const newTasks = { taskName,  };
        console.log(newTasks);

        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    toast('Added Successfully!');
                }
                form.reset();
            })
        console.log(newTasks);
    };
    const handleToast = () => {
    };

    return (
        <div className='w-[50%] mx-auto bg-orange-200'>
          
            <form onSubmit={handleAddTask} className=' mb-12  '>
                <div className="my-28">
                    <h2 className='text-center text-orange-800 font-bold text-4xl'>Add A Task</h2>

                    <div className=" p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task</span>
                            </label>
                            <input type="text" name='taskName' placeholder="Add Your Task" className="input input-bordered" required />
                        </div>
                       
                        
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleToast} className="btn btn-primary">Add</button>
                        <Toaster />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddATask;