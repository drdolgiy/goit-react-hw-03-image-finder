import {React, Component} from "react";
import { Overlay, ModalWrapper } from "../Modal/Modal.styled"

// export class Modal extends Component {


//     componentDidMount() {

//         window.addEventListener('keydown', e => {
//         if (e.code === 'Escape') {
//             this.props.onClose()
//         }
//         })
//     };
    
//     onImageClose = (e) => {
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     };


//     render() {
//             return (
//         <Overlay onClick={this.onImageClose}>
//             <ModalWrapper>
//                 {this.props.children}
//             </ModalWrapper>
//         </Overlay>)
//     };

// };

export const Modal = ({largeImageURL, tags, onClose, }) => {
        return (
        <Overlay onClick={() => onClose()}>
            <ModalWrapper>
               <img src={largeImageURL} alt={tags} width='960px'/>
            </ModalWrapper>
        </Overlay>
    );
};
