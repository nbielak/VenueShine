import React from "react";
import EventIndexItem from "../event_index/event_index_item";

class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.getpastEvents = this.getpastEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  getPastEvents() {
    let events = this.props.events;
    let pastEvents = [];
    for (let event in events) {
      if (events[event].pastEvent === true) {
        pastEvents.push(events[event]);
      }
    }

    return pastEvents;
  }

  render() {
    if (!this.props.events) {
      return <div>loading</div>;
    }
    let pastEvents = this.getPastEvents();
    if (pastEvents.length > 0) {
      return (
        <div>
          <EventIndexItem event={pastEvents[0]} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PastEvents;
