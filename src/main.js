
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/agecalc';

$(document).ready(function(){
  $("#ageForm").submit(function(event){
    event.preventDefault();
    const ageObject = new AgeCalculator($("#age").val(), $("#life").val());
    console.log("age: " + ageObject.age + " Life Expectancy: " + ageObject.lifeExpectancy);
  })
});