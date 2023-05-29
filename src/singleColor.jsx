import {toast} from 'react-toastify';
const singleColor =({color,index})=>{
    const { hex, weight } = color;
    const handleClick = async()=>{
        if (navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success('color copied to the clipboard ');
            } catch (error) {
                toast.error('could not copy color to the clipboard ');
            }
        }else{
            toast.error('clipboard is not available')
        }
    }
    return (
    <article onClick={handleClick} className={index>10 ?'color color-light':'color' } style={{background:`#${hex}`}}>
        <p className="percent-value">{weight} %</p>
        <p className="color-value"># {hex}</p>
    </article>
    );
};
export default singleColor;