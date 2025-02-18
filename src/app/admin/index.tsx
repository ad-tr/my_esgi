import { useState } from 'react';

export default function Admin() {
    const [requests, setRequests] = useState([
        { user: 'Alice', description: 'Request for new equipment', status: 'Pending' },
        { user: 'Bob', description: 'Request for software upgrade', status: 'Pending' }
    ]);
    const [stock, setStock] = useState([
        { name: 'Laptop', quantity: 10 },
        { name: 'Mouse', quantity: 25 }
    ]);
    const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

    // Handle request acceptance
    const handleRequest = (index:number) => {
        const updatedRequests = [...requests];
        updatedRequests[index].status = 'Accepted';
        setRequests(updatedRequests);
    };

    // Handle adding new stock item
    const addStockItem = () => {
        if (newItem.name && newItem.quantity > 0) {
            setStock([...stock, { ...newItem }]);
            setNewItem({ name: '', quantity: 0 });
        }
    };

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>

            {/* User Requests Management */}
            <div>
                <h2 className="text-xl font-semibold mb-2">User Requests</h2>
                {requests.length > 0 ? (
                    requests.map((request, index) => (
                        <div key={index} className="mb-2 p-4 border rounded bg-white shadow">
                            <p><strong>User:</strong> {request.user}</p>
                            <p><strong>Request:</strong> {request.description}</p>
                            <p><strong>Status:</strong> {request.status}</p>
                            {request.status === 'Pending' && (
                                <button onClick={() => handleRequest(index)} className="mt-2 bg-blue-500 text-white p-2 rounded">Accept</button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No requests available.</p>
                )}
            </div>

            {/* Stock Management */}
            <div>
                <h2 className="text-xl font-semibold mb-2">Stock Management</h2>
                <div className="flex gap-2 mb-4">
                    <input
                        className="p-2 border rounded"
                        placeholder="Item Name"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />
                    <input
                        className="p-2 border rounded"
                        type="number"
                        placeholder="Quantity"
                        value={newItem.quantity}
                        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
                    />
                    <button onClick={addStockItem} className="bg-green-500 text-white p-2 rounded">Add Item</button>
                </div>

                <div>
                    {stock.length > 0 ? (
                        stock.map((item, index) => (
                            <div key={index} className="mb-2 p-4 border rounded bg-white shadow">
                                <p><strong>Item:</strong> {item.name}</p>
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                            </div>
                        ))
                    ) : (
                        <p>No stock items available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}