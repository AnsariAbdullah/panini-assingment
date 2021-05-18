import React, { useState } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 500px;
	.wrapper{
		float: right;
    margin: 20px 0;
		.label{
			border: 1px solid #a9a9a9;
			padding: 1px 5px 2px;
			border-right: none;
		}
		.input-field{
			width: 80px;
			text-align: right;
			font-size: 15px;
			-moz-appearance: textfield;
			&:focus {
				outline:none;
			}
			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}
	}
	.slidecontainer {
		width: 100%;
		margin: 20px 0;
		display: flex;
    align-items: center;
		justify-content: center;
		.info {
			color: gray;
			font-size: 12px;
		}
		.slider {
			margin: 0 5px;
			-webkit-appearance: none;
			width: 100%;
			height: 10px;
			border-radius: 5px;  
			background: #b1c0e4;
			outline: none;
			opacity: 0.7;
			-webkit-transition: .2s;
			transition: opacity .2s;
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				width: 25px;
				height: 25px;
				border: 5px solid #fff;
				border-radius: 50%; 
				background: #1a76ee;
				cursor: pointer;
			}
			&::-moz-range-thumb {
				width: 25px;
				height: 25px;
				border: 5px solid #fff;
				border-radius: 50%;
				background: #1a76ee;
				cursor: pointer;
			}
		}
	}
`

const Slider = (props) => {
	const [newValue, setNewValue] = useState(0);

	const { minVal, maxVal, startValue, endValue } = props;

	function handleChange(event) {
		setNewValue(event.target.value);
	}

	return (
		<Container>
			<div className="wrapper">
				<span className="label">Rs.</span>
				<input
					type="number"
					className="input-field"
					min={minVal}
					max={maxVal}
					value={newValue}
					onChange={handleChange}
				/>
			</div>

			<div className="slidecontainer">
				<span className="info">{startValue}</span>
				<input
					type="range"
					className="slider"
					min={minVal}
					max={maxVal}
					value={newValue}
					onInput={handleChange}
				/>
				<span className="info">{endValue}</span>
			</div>
		</Container>
	);
}

Slider.propTypes = {
	minVal: PropTypes.number.isRequired,
	maxVal: PropTypes.number.isRequired,
	startValue: PropTypes.string.isRequired,
	endValue: PropTypes.string.isRequired
};

export default Slider;