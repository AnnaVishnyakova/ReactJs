import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { MessageField } from '../MessageField';
import { ChatList } from '../ChatList';
import './Layout.css';

class _Layout extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { match } = this.props;
        console.log(match);

        return (
            <div className='chat-layout'>
                <ChatList />
                <MessageField currentChat={match.params.id} />
            </div>
        );
    }
}

const Layout = withRouter(_Layout);

export { Layout };
