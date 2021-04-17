import React from 'react';
import './task.css'; 

export default function Task({ task: {id, title, state} }, onArchiveTask, onPinTask) {
    return(
        <div className="list-item">
            <div className="group1">
                <input 
                    type="checkbox" 
                    defaultChecked={state === 'TASK_ARCHIVED'} 
                    disabled={true} 
                    name="checked" 
                    className="gr1_checbox"
                />
                <input 
                    type="text" 
                    value={title} 
                    readOnly={true} 
                    className={`list-item-input ${state === 'TASK_ARCHIVED' && 'crossed'}`} 
                />
            </div>
            <div>
                {
                    state === 'TASK_PINNED' && 'Pinned'
                }
                {
                    state === 'TASK_ARCHIVED' && 'Archived'
                }
            </div>
        </div>
    )
}