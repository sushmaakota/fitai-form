// import React, { useState } from 'react';
// import './App.css';
// import {Body} from './Components/Body';
// import {Shop} from './Components/Shop';
// import WebcamComponent from './Components/Webcam';
// import {Header} from './Components/Header';

// function App() {
//   const [buttonText, setButtonText] = useState('Try New Fit AI');
//   const [isClicked, setIsClicked] = useState(false);
//   const [isCamClicked, setIsCamClicked] = useState(false);

//   const handleButtonClick = () => {
//     if (!isClicked) {
//       setButtonText('Scan with Cam');
//       setIsClicked(true);
//     } else if (isClicked && !isCamClicked) {
//       setIsCamClicked(true);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header /><br></br>
//         <button className="btn btn-primary center-button"
//           onClick={handleButtonClick}
//           disabled={isCamClicked}
//         >
//           {buttonText}
//         </button>
//         {!isCamClicked && (
//           <>
//             {isClicked ? <Shop /> : <Body />}
//           </>
//         )}
//         {isCamClicked && <WebcamComponent />}
//       </header>
//     </div>
//   );
// }

// export default App;
// // import React, { useState } from 'react';
// // import './App.css';
// // import { Body } from './Components/Body';
// // import { Shop } from './Components/Shop';
// // import WebcamComponent from './Components/Webcam';
// // import { Header } from './Components/Header';
// // import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';

// // function App() {
// //   const [isCamClicked, setIsCamClicked] = useState(false);

// //   const handleButtonClick = () => {
// //     setIsCamClicked(true);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <header className="App-header">
// //           <Header /><br></br>
// //           <button className="btn btn-primary center-button"
// //             onClick={handleButtonClick}
// //             disabled={isCamClicked}
// //           >
// //             {isCamClicked ? 'Scanning...' : 'Try New Fit AI'}
// //           </button>
// //         </header>

// //         <BrowserRouter>
// //           <Route path="/shop" component={Shop} />
// //           <Route path="/webcam" component={WebcamComponent} />
// //           <Route path="/" component={Body} />
// //         </BrowserRouter>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


import React, { useState } from 'react';
import './App.css';
import { Body } from './Components/Body';
import { Shop } from './Components/Shop';
import WebcamComponent from './Components/Webcam';
import { Header } from './Components/Header';
import Form from './Components/SignUpForm'; // Import your Form component

function App() {
  const [isCamClicked, setIsCamClicked] = useState(false);
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handleButtonClick = () => {
    if (!isCamClicked) {
      setIsSignupClicked(true); // Set this state to render the form
    } else if (isSignupClicked) {
      setIsCamClicked(true); // Set this state to render the WebcamComponent
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header /><br></br>
        <button className="btn btn-primary center-button"
          onClick={handleButtonClick}
          disabled={isCamClicked}
        >
          {isCamClicked ? 'Scanning...' : isSignupClicked ? 'Signup' : 'Try New Fit AI'}
        </button>
      </header>

      {isCamClicked ? (
        <WebcamComponent />
      ) : isSignupClicked ? (
        <Form /> // Render the Form component when Signup is clicked
      ) : (
        <Body />
      )}
    </div>
  );
}

export default App;
