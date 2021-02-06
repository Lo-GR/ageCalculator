
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/agecalc';
$(document).ready(function(){
  let age;
  let le;
  $("#ageForm").submit(function(event){
    event.preventDefault();
    age =$("#age").val()
    le = $("#life").val()
    $(".planetButtons").show();
    $("#resub").show();
    $("#sub").hide();
  })
  $("#resub").click(function(){
    $(".information").hide();
  })
  $("#mer").click(function(){
    let ageObject = new AgeCalculator($("#age").val(), $("#life").val());
    $(".information").show();
    $("#yourAge").text(ageObject.age);
    $("#yourLE").text(ageObject.lifeExpectancy);
    $("#yourPlanet").text("Mercury");
    $("#yourAgePlanet").text(ageObject.mercuryAge());
    let planetLE = ageObject.leOnPlanets("mercury");
    $("#yourLEPlanet").text(planetLE);
    $("#yourRemaining").text(ageObject.compareLE(planetLE));
  })
  $("#ven").click(function(){
    let ageObject = new AgeCalculator($("#age").val(), $("#life").val());
    $(".information").show();
    $("#yourAge").text(ageObject.age);
    $("#yourLE").text(ageObject.lifeExpectancy);
    $("#yourPlanet").text("Venus");
    $("#yourAgePlanet").text(ageObject.venusAge());
    let planetLE = ageObject.leOnPlanets("venus");
    $("#yourLEPlanet").text(planetLE);
    $("#yourRemaining").text(ageObject.compareLE(planetLE));
  })
  $("#mar").click(function(){
    let ageObject = new AgeCalculator($("#age").val(), $("#life").val());
    $(".information").show();
    $("#yourAge").text(ageObject.age);
    $("#yourLE").text(ageObject.lifeExpectancy);
    $("#yourPlanet").text("Mars");
    $("#yourAgePlanet").text(ageObject.marsAge());
    let planetLE = ageObject.leOnPlanets("mars");
    $("#yourLEPlanet").text(planetLE);
    $("#yourRemaining").text(ageObject.compareLE(planetLE));
  })
  $("#jup").click(function(){
    let ageObject = new AgeCalculator($("#age").val(), $("#life").val());
    $(".information").show();
    $("#yourAge").text(ageObject.age);
    $("#yourLE").text(ageObject.lifeExpectancy);
    $("#yourPlanet").text("Jupiter");
    $("#yourAgePlanet").text(ageObject.jupiterAge());
    let planetLE = ageObject.leOnPlanets("jupiter");
    $("#yourLEPlanet").text(planetLE);
    $("#yourRemaining").text(ageObject.compareLE(planetLE));
  })
});