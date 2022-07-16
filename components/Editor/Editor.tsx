import styles from './Editor.module.css'
 
export const Editor = () => {
    return (
        <div className={styles.container} contentEditable>
            <p className='font-bold desktop-h4'>Johan Doe</p>
            <div className='flex divide-x-[1px] divide-sylver-800'>
            <p className='pr-2'>London, UK</p>
            <p className='px-2'>+4478038092309</p>
            <p className='px-2'>johandoe@explain.com</p>
            <p className='pl-2'>johandoe.xyz</p>
            </div>
            <div className={styles.header} contentEditable={false} />
        </div>
    )
};