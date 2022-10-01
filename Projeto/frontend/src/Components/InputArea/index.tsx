import { Component } from "react";
import '../../App.css';
import CadastradorParametros from "../Cadastrar/cadastradorParametros";
import ResgatarResultado from "../Resgatar/resgateResultado";
import Results from "../Results";

type state = {
    result: number,
    aircraftModel: string,
    wind: number,
    windDirection: number,
    motor: string,
    temp: number,
    slope: number,
    slopeDirection: number,
    weight: number,
    certification: string,
    airportAltitude: number,
    overspeed: number,
    reverser: number,
    airstripCondition: string,
    brakingApplication: string,
    iceBuildup: string,
    landingFlap: string,
    trackConditions: string
}
export default class InputArea extends Component<{}, state> {

    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state = {
            result: 0,
            aircraftModel: '',
            wind: 0,
            windDirection: 0,
            motor: '',
            temp: 0,
            slope: 0,
            slopeDirection: 0,
            weight: 0,
            certification: '',
            airportAltitude: 0,
            overspeed: 0,
            reverser: 0,
            airstripCondition: '',
            brakingApplication: '',
            iceBuildup: '',
            landingFlap: '',
            trackConditions: ''
        }

        this.cadastrarCalculo = this.cadastrarCalculo.bind(this)
        this.submeterParametros = this.submeterParametros.bind(this)
        this.getResultado = this.getResultado.bind(this)

        this.getAircraft = this.getAircraft.bind(this)
        this.getWind = this.getWind.bind(this)
        this.getWindDirection = this.getWindDirection.bind(this)
        this.getMotor = this.getMotor.bind(this)
        this.getTemp = this.getTemp.bind(this)
        this.getSlopeDirection = this.getSlopeDirection.bind(this)
        this.getSlope = this.getSlope.bind(this)
        this.getWeight = this.getWeight.bind(this)
        this.getCertification = this.getCertification.bind(this)
        this.getAirportAltitude = this.getAirportAltitude.bind(this)
        this.getOverspeed = this.getOverspeed.bind(this)
        this.getReverser = this.getReverser.bind(this)
        this.getAirstripCondition = this.getAirstripCondition.bind(this)
        this.getBrakingApplication = this.getBrakingApplication.bind(this)
        this.getIceBuildup = this.getIceBuildup.bind(this)
        this.getLandingFlap = this.getLandingFlap.bind(this)
        this.getTrackConditions = this.getTrackConditions.bind(this)
    }

    cadastrarCalculo(objeto: Object) {
        let cadastrar = new CadastradorParametros();
        cadastrar.cadastrar(objeto);
    }

    getAircraft(e: any){this.setState({aircraftModel: e.target.value})}
    getWind(e: any){this.setState({wind: e.target.value})}
    getWindDirection(e: any){this.setState({windDirection: e.target.value})}
    getMotor(e: any){this.setState({motor: e.target.value})}
    getTemp(e: any){this.setState({temp: e.target.value})}
    getSlopeDirection(e: any){this.setState({slopeDirection: e.target.value})}
    getSlope(e: any){this.setState({slope: e.target.value})}
    getWeight(e: any){this.setState({weight: e.target.value})}
    getCertification(e: any){this.setState({certification: e.target.value})}
    getAirportAltitude(e: any){this.setState({airportAltitude: e.target.value})}
    getOverspeed(e: any){this.setState({overspeed: e.target.value})}
    getReverser(e: any){this.setState({reverser: e.target.value})}
    getAirstripCondition(e: any){this.setState({airstripCondition: e.target.value})}
    getBrakingApplication(e: any){this.setState({brakingApplication: e.target.value})}
    getIceBuildup(e: any){this.setState({iceBuildup: e.target.value})}
    getLandingFlap(e: any){this.setState({landingFlap: e.target.value})}
    getTrackConditions(e: any){this.setState({trackConditions: e.target.value})}
    
    // procedimento para enviar parâmetros p/ back-ned e puxar resultado
    submeterParametros(e: any){
        e.preventDefault();
        this.cadastrarCalculo(this.state)
        this.getResultado();
    }

    // colocar resultado no campo solicitado
    getResultado(){
        let resgatarResultado = new ResgatarResultado()
        const results = resgatarResultado.resgatar()
        results.then(result => this.setState({result: result["result"]}))
    }

    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={(e) => {this.submeterParametros(e)}}>
                        <div className="inputArea">
                            <select onChange={this.getAircraft} className="inputPilot" name="aircraftModel" id='md' placeholder="Aircraft Model">
                                <option selected disabled>Aircraft Model</option>
                                <option value={'default-model'}>Default model</option>
                            </select>
                            <select onChange={this.getMotor} className="inputPilot" name="motor" id='sm'>
                                <option disabled selected>Motor</option>
                                <option value={''}>Default motor</option>
                            </select>
                            <select onChange={this.getWindDirection} className="inputPilot" name="windDirection" id="sm">
                                <option selected disabled>Wind Direction</option>
                                <option value={1}>Head wind</option>
                                <option value={2}>Tail wind</option>
                            </select>
                            <input onChange={this.getWind} className="inputPilot" name="wind" id='sm' placeholder="Wind (kt)" type="number" />
                            <input onChange={this.getTemp} className="inputPilot" name="temp" id='sm' placeholder="Temperature (°C)" type="number" />
                            <select onChange={this.getSlopeDirection} className="inputPilot" name="slopeAngle" id="sm">
                                <option selected disabled>Slope Angle</option>
                                <option value={1}>Uphill</option>
                                <option value={2}>Downhill</option>
                            </select>
                            <input onChange={this.getSlope} className="inputPilot" name="slope" id='sm' placeholder="Slope (%)" type="number" />
                            <input onChange={this.getWeight} className="inputPilot" name="weight" id='sm' placeholder="Aircraft Weight (kg)" type="number" min={10000} step={1000}/>
                            <input onChange={this.getCertification} className="inputPilot" name="certification" id='sm' placeholder="Certification" type="text" />
                            <input onChange={this.getAirportAltitude} className="inputPilot" name="airportAltitude" id='sm' placeholder="Airport Altitude (ft)" type="number" />
                            <input onChange={this.getOverspeed} className="inputPilot" name="overspeed" id='sm' placeholder="Overspeed (kt)" type="number" />
                            <select onChange={this.getReverser} className="inputPilot" name="reverser" id='sm'>
                                <option selected disabled>Reverser</option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                            </select>
                            <select onChange={this.getAirstripCondition} className="inputPilot" name="airstripCondition" id='sm'>
                                <option selected disabled>Airstrip Condition</option>
                                <option value={6}>Dry</option>
                                <option value={5}>Wet</option>
                                <option value={4}>Compact Snow</option>
                                <option value={3}>Loose Snow</option>
                                <option value={2}>Standing Water/Slush</option>
                                <option value={1}>ICE</option>
                            </select>
                            <input onChange={this.getBrakingApplication} className="inputPilot" name="brakingApplication" id='sm' placeholder="Braking Application" type="number" min={1} max={6}/>
                            <select onChange={this.getIceBuildup} className="inputPilot" name="iceBuildup" id='sm' placeholder="Ice Build Up">
                                <option selected disabled>Ice Buildup</option>
                                <option value={''}>With Ice</option>
                                <option value={''}>Wihtout Ice</option>
                            </select>
                            <select onChange={this.getLandingFlap} className="inputPilot" name="landingFlap" id='sm'>
                                <option selected disabled>Landing Flap</option>
                                <option value={''}>Flap 220</option>
                                <option value={''}>Flap 450</option>
                            </select>
                        </div>
                        <div className="footer">
                            <span className="btn-section">
                                <button type="submit" className="botao azul">Calculate</button>
                                <button type="reset"className="botao cinza">Clear All</button>
                            </span>
                            <Results result={this.state.result}/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}