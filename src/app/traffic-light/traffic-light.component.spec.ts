import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficLightService } from '../traffic-light-service.service';
import { TrafficLightComponent } from './traffic-light.component';

describe('TrafficLightComponent', () => {
  let component: TrafficLightComponent;
  let fixture: ComponentFixture<TrafficLightComponent>;
  let mockTrafficLightService: Partial<
    Record<keyof TrafficLightService, jest.Mock>
  >;

  beforeEach(async () => {
    // simulating TrafficLightService with just one method
    mockTrafficLightService = {
      simulateRoadTraffic: jest
        .fn()
        .mockReturnValue(['initial_mock_road', 'step1_mock_road']),
    };

    await TestBed.configureTestingModule({
      imports: [TrafficLightComponent],
      providers: [
        // Indicate that when TrafficLightService is requested, should use the mock instead the real service
        { provide: TrafficLightService, useValue: mockTrafficLightService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should test service consumption', () => {
    expect(mockTrafficLightService.simulateRoadTraffic).toHaveBeenCalled();
  });
});
