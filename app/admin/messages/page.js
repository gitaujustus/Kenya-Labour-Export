'use client'
import React, { useState } from 'react';
import Messages from '@/components/gok/messages';
import Loading from '@/components/loading';
import toast, { Toaster } from 'react-hot-toast';
import Topbar from '@/components/gok/topbar';

const ChatMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, message: 'Hello!', username: 'John', email:"youngprofessor991@gmail.com" },
    { id: 2, message: 'How are you?', username: 'Alice', email:"youngprofessor991@gmail.com" },
    { id: 3, message: 'I am doing well, thank you.', username: 'John', email:"youngprofessor991@gmail.com" },
    { id: 4, message: 'I am doing well, thank you.', username: 'John', email:"youngprofessor991@gmail.com" },
    { id: 5, message: 'I am doing well, thank you.', username: 'John', email:"youngprofessor991@gmail.com" },
  ]);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this message?');

    if (!isConfirmed) {
      return;
    }

    try {
      // Simulate deleting the message by filtering the messages array
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
      toast.success('Message deleted successfully');
    } catch (error) {
      toast.error('Error deleting message');
      // console.error('Error deleting message:', error.message);
    }
  };

  return (
    <section className=" sm:ml-64 min-h-screen">
        <Topbar/>
      {loading ? (
        <Loading />
      ) : (
        messages.map((message) => (
          <Messages key={message.id} message={message} handleDelete={handleDelete} />
        ))
      )}
      <Toaster />
    </section>
  );
};

export default ChatMessages;
