import { getFeaturedEvents } from '../dummy-data';
import EventList from '../commponents/events/components';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
