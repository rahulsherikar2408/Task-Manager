"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { user } = useUser();

  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [tasks, setTasks] = useState([]);

  const theme = themes[selectedTheme];

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/tasks");

      const sorted = res.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
  
        // Calculate the difference in milliseconds between the current date and the completion dates of tasks a and b
        const diffA = Math.abs(new Date() - dateA);
        const diffB = Math.abs(new Date() - dateB);
  
        // Tasks with a completion date closer to the current date will have a smaller difference, so they should come first
        return diffA - diffB;
      });
      setTasks(sorted);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const updateTask = async (task) => {
    try {
      const res = await axios.put(`/api/tasks`, task);

      toast.success("Task updated");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  const importantTasks = tasks.filter((task) => task.isImportant === true);
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

  React.useEffect(() => {
    if (user) allTasks();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        deleteTask,
        isLoading,
        completedTasks,
        importantTasks,
        incompleteTasks,
        updateTask,
        modal,
        openModal,
        closeModal,
        allTasks,
        collapsed,
        collapseMenu,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
