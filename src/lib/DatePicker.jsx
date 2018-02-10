import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import styled from 'styled-components';

const SelectedStyled = styled(Select)`
.Select-control,
.Select-value,
.Select-placeholder {
  height: 3rem;
  line-height: 2rem;
}
.Select-value,
.Select-placeholder {
  line-height: 3rem !important;
}
`;

export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: '',
    }
  }
  render() {
    const availaleTimes = [
      'Sat, July 4 2015 8:00am',
      'Sat, July 4 2015 8:30am',
      'Sun, July 5 2015 8:00am',
      'Sun, July 5 2015 8:30am',
    ];
    const handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Selected: ${selectedOption.label}`);
    }
    const options = availaleTimes.map(time => ({
      value: time,
      label: time
    }));
    return (
      <SelectedStyled name="times"
        value={this.state.selectedOption}
        onChange={handleChange}
        options={options}
        clearable={false}
      />
    )
  }
}