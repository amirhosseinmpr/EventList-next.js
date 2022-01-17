import { Fragment } from 'react';
import { getEventById, getAllEvents } from '../../helpers/api-util';
import EventSummary from '../../commponents/event-detail/event-summary';
import EventLogistics from '../../commponents/event-detail/event-logistics';
import EventContent from '../../commponents/event-detail/event-content';
import ErrorAlert from '../../commponents/ui/error-alert';

function EventDetailPage(props) {
  const event = props.selectevent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectevent: event,
    },
  };
}
export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map(event => ({
    params: { eventId: event.id.toString() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}


export default EventDetailPage;