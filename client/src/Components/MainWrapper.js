import React, { Component }  from 'react';

export class MainWrapper extends Component {
    render(){
        return(
            <div className="main-container"> {/* position fixed */}
                <div className="main-subcontainer"> { /* position relative */}
                    <div className="field-wrapper-cause-not-all-support-flex"> {/* Pos abs. We could just apply flex to main container, but it is not supported by all agents */}
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};
