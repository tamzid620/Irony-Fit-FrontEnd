'use client';
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../dp.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const kpis = [
    {
        title: "Total Revenue",
        value: "$45,231",
        trend: "+12.5%",
        trendType: "up",
        icon: "fa-dollar-sign"
    },
    {
        title: "Active Users",
        value: "12,458",
        trend: "+8.2%",
        trendType: "up",
        icon: "fa-users"
    },
    // {
    //     title: "Active Companies",
    //     value: "12",
    //     trend: "+2.4%",
    //     trendType: "up",
    //     icon: "fa-building"
    // },
    // {
    //     title: "Total Visits",
    //     value: "11,458,789",
    //     trend: "+12.4%",
    //     trendType: "up",
    //     icon: "fa-users"
    // },
    {
        title: "Total Orders",
        value: "1,234",
        trend: "-2.4%",
        trendType: "down",
        icon: "fa-shopping-cart"
    },
    {
        title: "Page Views",
        value: "89,456",
        trend: "+15.3%",
        trendType: "up",
        icon: "fa-eye"
    }
];

const performanceMetrics = [
    { label: "Conversion Rate", value: 24.8, color: "#3b82f6", suffix: "%" },
    { label: "Customer Retention", value: 78.3, color: "#10b981", suffix: "%" },
    { label: "Avg. Order Value", value: 127.42, color: "#8b5cf6", prefix: "$" },
    { label: "Customer Satisfaction", value: 4.7, max: 5, color: "#f59e0b" }
];


const DashboardBody = () => {
    const revenueRef = useRef(null);
    const userRef = useRef(null);
    const salesRef = useRef(null);

    useEffect(() => {
        // Revenue Chart
        new Chart(revenueRef.current, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [
                    {
                        label: "Revenue",
                        data: [4000, 3000, 9800, 3908, 4800, 3800, 4300],
                        backgroundColor: "#3b82f6",
                    },
                    {
                        label: "Profit",
                        data: [2400, 1398, 2000, 2780, 1890, 2390, 3490],
                        backgroundColor: "#10b981",
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        // User Activity Chart
        new Chart(userRef.current, {
            type: "line",
            data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        label: "Active Users",
                        data: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
                        borderColor: "#8b5cf6",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        tension: 0.4,
                        fill: true,
                    },
                ],
            },
            options: { responsive: true, maintainAspectRatio: false },
        });

        // Sales Distribution Pie
        new Chart(salesRef.current, {
            type: "pie",
            data: {
                labels: ["Product A", "Product B", "Product C", "Product D"],
                datasets: [
                    {
                        data: [400, 300, 300, 200],
                        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
                    },
                ],
            },
            options: { responsive: true, maintainAspectRatio: false },
        });
    }, []);

    return (
        <div className="dashboard-home-body">
            <div className="container">
                {/* KPI Grid */}
                <div className="kpi-grid">
                    {kpis.map((kpi, index) => (
                        <div className="kpi-card" key={index}>
                            <div className="kpi-header">
                                <div className="kpi-info">
                                    <h3>{kpi.title}</h3>
                                    <div className="kpi-value">{kpi.value}</div>
                                    <div className={`kpi-trend trend-${kpi.trendType}`}>
                                        <i className={`fas fa-arrow-${kpi.trendType}`}></i>
                                        <span>{kpi.trend}</span>
                                    </div>
                                </div>
                                <div className="kpi-icon">
                                    <i className={`fas ${kpi.icon}`}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Charts */}
                <div className="charts-grid">
                    <div className="chart-card">
                        <h3>Revenue & Profit</h3>
                        <div className="chart-container">
                            <canvas ref={revenueRef}></canvas>
                        </div>
                    </div>
                    <div className="chart-card">
                        <h3>User Activity</h3>
                        <div className="chart-container">
                            <canvas ref={userRef}></canvas>
                        </div>
                    </div>
                </div>

                {/* Additional Charts */}
                <div className="additional-charts">
                    <div className="chart-card">
                        <h3>Sales Distribution</h3>
                        <div className="pie-chart-container">
                            <canvas ref={salesRef}></canvas>
                        </div>
                    </div>
                    {/* Metrics card here */}
                    <div className="metrics-card">
                        <h3>Performance Metrics</h3>
                        {performanceMetrics.map((metric, index) => {
                            const percentage = metric.max
                                ? (metric.value / metric.max) * 100
                                : metric.value;
                            return (
                                <div className="metric-item" key={index}>
                                    <div className="metric-header">
                                        <span>{metric.label}</span>
                                        <span>
                                            {metric.prefix || ""}
                                            {metric.value}
                                            {metric.suffix || ""}
                                            {metric.max ? `/${metric.max}` : ""}
                                        </span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${percentage}%`,
                                                backgroundColor: metric.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Recent Activity */}
                <div class="activity-card">
                    <div class="activity-header">
                        <h3>Recent Activity</h3>
                    </div>
                    <div class="activity-list">
                        <div class="activity-item">
                            <div class="activity-content">
                                <div class="activity-icon icon-blue">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="activity-text">
                                    <h4>New user registered</h4>
                                    <p>John Smith</p>
                                </div>
                            </div>
                            <div class="activity-time">2 minutes ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-content">
                                <div class="activity-icon icon-green">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <div class="activity-text">
                                    <h4>Order completed</h4>
                                    <p>Sarah Johnson</p>
                                </div>
                            </div>
                            <div class="activity-time">15 minutes ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-content">
                                <div class="activity-icon icon-purple">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="activity-text">
                                    <h4>Payment processed</h4>
                                    <p>Mike Davis</p>
                                </div>
                            </div>
                            <div class="activity-time">1 hour ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-content">
                                <div class="activity-icon icon-orange">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <div class="activity-text">
                                    <h4>New product added</h4>
                                    <p>Emma Wilson</p>
                                </div>
                            </div>
                            <div class="activity-time">2 hours ago</div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-content">
                                <div class="activity-icon icon-gray">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="activity-text">
                                    <h4>Report generated</h4>
                                    <p>Alex Brown</p>
                                </div>
                            </div>
                            <div class="activity-time">3 hours ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;
