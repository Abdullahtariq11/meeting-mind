import React from 'react'
import './FeaturesSection.css'
import AiIcon from'../../Assets/icons8-ai-ios-17-outlined/icons8-ai-100.png';
import ActionItem from'../../Assets/icons8-ai-ios-17-outlined/icons8-call-to-action-100.png';
import SecurityIcon from'../../Assets/icons8-ai-ios-17-outlined/icons8-data-protection-100.png';

function FeaturesSection() {
  return (
<div class="features-section">
    <h2>Key Features</h2>
    <div class="feature-card">
        <div class="feature-icon">
            <img src={AiIcon} alt="AI Icon"/>
        </div>
        <div class="feature-content">
            <h3>AI-Powered Summaries</h3>
            <p>Quickly generate detailed summaries of your meetings using AI.</p>
        </div>
    </div>

    <div class="feature-card">
        <div class="feature-icon">
            <img src={ActionItem} alt="Action Items Icon"/>
        </div>
        <div class="feature-content">
            <h3>Actionable Insights</h3>
            <p>Automatically extract key action items and decisions.</p>
        </div>
    </div>

    <div class="feature-card">
        <div class="feature-icon">
            <img src={SecurityIcon} alt="Security Icon"/>
        </div>
        <div class="feature-content">
            <h3>Secure Data Handling</h3>
            <p>Ensure your data is stored securely and meets compliance standards.</p>
        </div>
    </div>
</div>
  )
}

export default FeaturesSection