import { Fragment } from 'react';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../commponents/events/event-list';
import EventsSearch from '../../commponents/events/events-search';

function AllEventsPage(props) {
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
