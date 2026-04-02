import { useState } from "react";

const App = () => {
  const [addTask, setAddTask] = useState(false)
  const today = new Date().toISOString().split('T')[0];
  
  function handleTask(){
    setAddTask(prev => !prev)
  }

  return (
    <>
      <header
      className="bg-slate-200 p-5 mb-5 shadow-lg"
      >
        <div
        className="flex items-center justify-between"
        >
          <h1 className="font-black text-2xl">Todo List</h1>
          <button
          onClick={handleTask}
          className="px-3 py-1 bg-slate-800 text-white text-lg font-semibold rounded-lg hover:cursor-pointer"
          >Create Todo</button>
        </div>
      </header>

      <main className="min-h-screen bg-slate-50 p-10">
        <section className="flex justify-center">
          {addTask && (
            <form className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col gap-6">
              
              <div className="space-y-1">
                <label htmlFor="title" className="text-sm font-bold text-slate-700 ml-1">Task Title</label>
                <input 
                  type="text" 
                  id="title"  
                  placeholder="e.g. Learn React Router"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="description" className="text-sm font-bold text-slate-700 ml-1">Description</label>
                <textarea 
                  id="description"
                  rows={3}
                  placeholder="Focusing more on creating routes..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 relative">
                  <label htmlFor="category" className="text-sm font-bold text-slate-700 ml-1">Category</label>
                  <select 
                    id="category"
                    className="w-full appearance-none h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 cursor-pointer text-slate-600"
                  >
                    <option value="">Choose...</option>
                    <option value="work">Business</option>
                    <option value="school">School</option>
                  </select>
                  {/* Custom Chevron */}
                  <div className="absolute right-4 top-9.5 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="date" className="text-sm font-bold text-slate-700 ml-1">Due Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    min={today}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 accent-indigo-500 text-slate-600 cursor-pointer"
                  />
                </div>
              </div>

              <button className="w-full h-12 mt-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200">
                Create Todo
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  )
}

export default App