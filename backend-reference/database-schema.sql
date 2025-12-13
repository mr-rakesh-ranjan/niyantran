-- Niyantran Database Schema
-- MySQL/MariaDB

-- Create database
CREATE DATABASE IF NOT EXISTS niyantran_db;
USE niyantran_db;

-- Leads table
CREATE TABLE leads (
    id INT PRIMARY KEY AUTO_INCREMENT,
    parent_name VARCHAR(255) NOT NULL,
    child_class VARCHAR(10) NOT NULL,
    whatsapp_number VARCHAR(15) NOT NULL,
    source VARCHAR(50) DEFAULT 'landing_page',
    status VARCHAR(20) DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_created_at (created_at),
    INDEX idx_whatsapp (whatsapp_number)
);

-- Analytics events table (optional)
CREATE TABLE analytics_events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100) NOT NULL,
    event_data JSON,
    timestamp TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_event_name (event_name),
    INDEX idx_timestamp (timestamp)
);

-- Lead status history (optional - for tracking lead progression)
CREATE TABLE lead_status_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lead_id INT NOT NULL,
    old_status VARCHAR(20),
    new_status VARCHAR(20),
    changed_by VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
    INDEX idx_lead_id (lead_id)
);

-- Sample data for testing
INSERT INTO leads (parent_name, child_class, whatsapp_number, source, status) VALUES
('Test Parent 1', '8', '9876543210', 'landing_page', 'new'),
('Test Parent 2', '10', '9876543211', 'landing_page', 'contacted');

-- Useful queries

-- Get all new leads
SELECT * FROM leads WHERE status = 'new' ORDER BY created_at DESC;

-- Get leads from last 7 days
SELECT * FROM leads WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY);

-- Count leads by class
SELECT child_class, COUNT(*) as count 
FROM leads 
GROUP BY child_class 
ORDER BY child_class;

-- Get conversion funnel
SELECT 
    status,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM leads), 2) as percentage
FROM leads
GROUP BY status
ORDER BY count DESC;
