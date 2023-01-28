import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import MapCont from '../../components/controllers/mapCont/MapCont'
import { act } from 'react-dom/test-utils'
import store from '../../redux/store/store'
import { IMapProps } from '../../components/UI/map/map.props'


const mockChildComponent = jest.fn();

jest.mock("../../components/UI/map/Map", () => (props: IMapProps) => {
    mockChildComponent(props);
    return <div/>;
});


describe('MapCont', () => {
  
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Provider store={store} >< MapCont /></Provider>)
 
    })


    it("Render Map without attributes (markers, polylineData) if store is empty", () => {
        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.not.objectContaining({
                markers: [ [59.84660399, 30.29496392], [59.82934196, 30.42423701]],
            })
        );
    });

    it('render Map component with attributes (markers, polylineData) if store is not empty', async () => {
        act(() => {
            store.dispatch({
                type: 'currentOrder/setOrder',
                payload: {
                    id: 357,
                    from: { lat: 59.84660399, lng: 30.29496392 },
                    to: { lat: 59.82934196, lng: 30.42423701 }
                }
            })
  
            store.dispatch({
                type: 'currentOrder/setPolyline',
                payload: [
                    [59.84660399, 30.29496392],
                    [59.82934196, 30.42423701],
                ],
            })
        })

        expect(mockChildComponent).toHaveBeenCalledWith(
            expect.objectContaining({
                markers: [ [59.84660399, 30.29496392], [59.82934196, 30.42423701]],
                polylineData: [ [59.84660399, 30.29496392], [59.82934196, 30.42423701]],
            })
        );


    })

})



