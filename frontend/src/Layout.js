import React from 'react';

export default class Layout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="main">
                    <main>
                        <div className="content" id="content">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}