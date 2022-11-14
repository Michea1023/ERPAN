import React from 'react'
import Quagga from 'quagga'

export default class Scanner extends React.Component {
    state = {
        results: [],
    }

    render() {
        return (
            <React.Fragment>
                <div id='interactive' className='viewport'/>
            </React.Fragment>
        )
    }

    componentDidMount() {
        Quagga.init(
            {
                inputStream: {
                    type: 'LiveStream',
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: 'environment', // or user
                    },
                },
                locator: {
                    patchSize: 'medium',
                    halfSample: true,
                },
                numOfWorkers: 2,
                decoder: {
                    readers: ['code_128_reader', 'ean_reader'],
                    debug: {
                        drawBoundingBox: true,
                        showFrequency: false,
                        drawScanline: true,
                        showPattern: false,
                    },
                },
                locate: true,
            },
            function (err) {
                if (err) {
                    return console.error(err)
                }
                console.log('Initialization finished. Ready to start')
                Quagga.start()
            }
        )
        Quagga.onDetected(this.onDetected)
    }

    componentWillUnmount() {
        Quagga.offDetected(this.onDetected)
    }

    onDetected = (result) => {
        let code = result.codeResult.code
        this.setState({results: [...this.state.results, code]})

        if (this.state.results.length > 50) {
            this.props.onDetected(this.state.results)
            this.props.handleBarCode(code)
        }
    }
}
