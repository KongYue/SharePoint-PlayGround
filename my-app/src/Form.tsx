import * as React from 'react';


interface IProps {
    text: string;
    age?: number;
}
interface IState {
    email: string;
    name: string;
}

export default class Form extends React.Component<IProps, IState> {
    state: IState = {
        email: "n.wang@abmsystems.com",
        name: "Nick Wang"
    }
    props: IProps = {
        text: "mytype"
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value}: any= e.target;
        this.setState (
            {
                name: value
            }
        );
    }
  public render() {
      const {text} = this.props;
      const {name} = this.state; 
    return (
        <div>
            <div>{text}</div>
            <input name="name" value={name} onChange={this.handleChange}/>
        </div>
    );
  }
}


