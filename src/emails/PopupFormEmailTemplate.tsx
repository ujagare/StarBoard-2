import * as React from 'react';

interface PopupFormEmailData {
  name: string;
  phone: string;
  email: string;
  requirement?: string;
  location?: string;
}

const PopupFormEmailTemplate = (data: PopupFormEmailData) => {
  return (
    <html>
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #0F1C2D 0%, #1a2b3d 100%);
              color: #CFA85F;
              padding: 30px 20px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .badge {
              display: inline-block;
              background: #CFA85F;
              color: #0F1C2D;
              padding: 5px 15px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 30px 20px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e0e0e0;
            }
            .field:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: 600;
              color: #0F1C2D;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              color: #333;
            }
            .highlight {
              background: #fff9e6;
              padding: 15px;
              border-left: 4px solid #CFA85F;
              margin: 20px 0;
            }
            .footer {
              background: #f8f8f8;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
            .footer a {
              color: #CFA85F;
              text-decoration: none;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>🎯 New Interest Registration</h1>
            {data.requirement && (
              <span className="badge">{data.requirement}</span>
            )}
          </div>
          
          <div className="content">
            <p style={{ fontSize: '16px', marginBottom: '25px' }}>
              A new lead has registered interest through the popup form on your website.
            </p>

            <div className="highlight">
              <strong style={{ color: '#0F1C2D' }}>Quick Action Required:</strong> 
              <span style={{ marginLeft: '5px' }}>Follow up within 24 hours for best conversion rates.</span>
            </div>

            <div className="field">
              <div className="label">Full Name</div>
              <div className="value">{data.name}</div>
            </div>

            <div className="field">
              <div className="label">Email Address</div>
              <div className="value">
                <a href={`mailto:${data.email}`} style={{ color: '#CFA85F' }}>
                  {data.email}
                </a>
              </div>
            </div>

            <div className="field">
              <div className="label">Phone Number</div>
              <div className="value">
                <a href={`tel:+91${data.phone}`} style={{ color: '#CFA85F' }}>
                  +91 {data.phone}
                </a>
              </div>
            </div>

            {data.requirement && (
              <div className="field">
                <div className="label">Requirement Type</div>
                <div className="value">{data.requirement}</div>
              </div>
            )}

            {data.location && (
              <div className="field">
                <div className="label">Preferred Location</div>
                <div className="value">{data.location}</div>
              </div>
            )}
          </div>

          <div className="footer">
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Starboard Realtors</strong>
            </p>
            <p style={{ margin: '0 0 5px 0' }}>
              201, Raichandani Galaxy, Beside Croma Store
            </p>
            <p style={{ margin: '0 0 10px 0' }}>
              Pune, Maharashtra, India-411045
            </p>
            <p style={{ margin: '0' }}>
              <a href="mailto:connect@starboardrealtors.co.in">connect@starboardrealtors.co.in</a> | 
              <a href="tel:+919769494723"> +91 9769494723</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default PopupFormEmailTemplate;
