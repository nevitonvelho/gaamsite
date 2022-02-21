import React, { useEffect } from 'react';
import styles from './styled.module.scss';


  
  import { HiArrowRight } from 'react-icons/Hi';

  class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            currentTab: -1,
            data: [
              { id: "1", name: "London" ,info: "London is the capital city of England."},
              { id: "2", name: "Paris" ,info: "Paris is the capital of France." },
              { id: "3", name: "Tokyo"  ,info: "Tokyo is the capital of Japan."}
            ]
    };
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(currentTab) {
      this.setState({ currentTab });
    }

    render() {
      return (
  
  <div>
    <h2>Vertical Tabs</h2>
    <p>Click on the buttons inside the tabbed menu:</p>
    <div className="tab">
    {this.state.data.map((button, i) => (
      <button key={button.name} className="tablinks" onClick={() => this.handleClick(i)}>{button.name}</button>
      )
      )
    }
    </div>
  
    <div className="tabcontent">
      {this.state.currentTab !== -1 &&
        <React.Fragment>
          <h3>{this.state.data[this.state.currentTab].name}</h3>
          <p>{this.state.data[this.state.currentTab].info}</p>
        </React.Fragment>
      }
    </div>
  </div>
    )
    }
  }

  ReactDOM.render( <Modal/> ,
    document.getElementById('root')
  );
  
