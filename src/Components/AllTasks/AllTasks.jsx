import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

const AllTasks = () => {
    const [isSort, setSort] = useState(true)
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => { setMyData(data) })

    }, [])
    console.log(myData);

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            // fetch(`https://kidolls-server.vercel.app/mytasks?email=${user?.email}`)
                            //     .then(res => res.json())
                            //     .then(data => { setMyData(data) })
                        }
                        console.log(result)
                    })
            }
        })
    }
    return (
        <div className='bg-orange-200 w-[75%] mx-auto my-10'>
            <div className="overflow-x-auto">
                {

                    isSort ? <button className="p-2 text-green-600 text-lg mb-2 bg-red-100 rounded-lg " onMouseUp={() => setSort(!isSort)}> Low To High </button> :
                        <button className="p-2 text-green-600 text-lg mb-2 bg-red-100 rounded-lg " onMouseUp={() => setSort(!isSort)} > High To Low </button>

                }
                <table className="table table-compact w-full text-center justify-center">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Task</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData?.map((task, index) =>
                                <tr
                                    key={task._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{task.taskName}</td>
                                    <td><button className='btn btn-primary'>
                                        <Link to={`/updateData/${task._id}`}>UPDATE</Link>
                                    </button></td>
                                    <td><button onClick={() => handleDelete(task._id)} className='btn btn-danger'>DELETE</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};


{/* <div className="overflow-x-auto">
<table className="table table-zebra w-full">
    {/* head 
    <thead>
        <tr>
            <th>NO</th>
            <th>Seller</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>QUANTITY</th>
            <th>VIEW dETAILS</th>
        </tr>
    </thead>
    <tbody>
        {/* row 1
        <tr>
            <th>1</th>
            <td>NAme:</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td><button className='btn btn-primary'>Details</button></td>
        </tr>
    </tbody>
</table>
</div> */}

export default AllTasks;