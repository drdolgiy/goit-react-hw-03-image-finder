import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";



export class App extends Component {
  componentDidMount() {

    fetch('https://pixabay.com/api/?q=cat&page=1&key=24541391-b479c34a264a17829baf6aba8&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json()).then(console.log)
  };

  render() {
    return (
      <Searchbar />

    )
  };
};







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
