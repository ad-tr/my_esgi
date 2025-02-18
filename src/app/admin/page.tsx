"use client"
import { useState } from 'react';
import DesktopNavbar from "@/components/DesktopNavbar";

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
        <>
            <DesktopNavbar />
            <div className="p-4 space-y-6 fixed right-0 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 -z-30">
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
                                    <button onClick={() => handleRequest(index)} className="mt-2 bg-[#38549d] text-white rounded-lg px-3">Accept</button>
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
                        <button onClick={addStockItem} className="bg-[#38549d] p-2 text-white rounded-lg px-3">Add Item</button>
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
        </>
    );
}