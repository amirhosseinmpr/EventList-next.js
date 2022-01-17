import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../commponents/events/components';

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 30,
  };
}
export default HomePage;
