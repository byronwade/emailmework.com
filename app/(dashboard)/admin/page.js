import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Users, DollarSign, TrendingUp, Activity, Mail, Phone, Calendar, AlertTriangle, CheckCircle, Clock, BarChart3, PieChart, Settings, Bell, Search, Filter, Download, RefreshCw, Eye, Edit, Trash2, Plus, ArrowUp, ArrowDown, Star, MessageSquare, Shield, Zap } from "lucide-react";

const statsCards = [
	{
		title: "Total Users",
		value: "2,847",
		change: "+12.5%",
		changeType: "positive",
		icon: Users,
		description: "Active users this month",
		color: "bg-blue-500",
	},
	{
		title: "Revenue",
		value: "$45,231",
		change: "+8.2%",
		changeType: "positive",
		icon: DollarSign,
		description: "Total revenue this month",
		color: "bg-green-500",
	},
	{
		title: "Conversion Rate",
		value: "3.24%",
		change: "-2.1%",
		changeType: "negative",
		icon: TrendingUp,
		description: "Lead to customer conversion",
		color: "bg-orange-500",
	},
	{
		title: "Active Sessions",
		value: "1,234",
		change: "+5.7%",
		changeType: "positive",
		icon: Activity,
		description: "Current active sessions",
		color: "bg-purple-500",
	},
];

const recentActivities = [
	{
		id: 1,
		type: "user_signup",
		message: "New user registered: john.doe@example.com",
		timestamp: "2 minutes ago",
		icon: Users,
		color: "text-blue-500",
	},
	{
		id: 2,
		type: "payment",
		message: "Payment received: $299 from Pro Account",
		timestamp: "5 minutes ago",
		icon: DollarSign,
		color: "text-green-500",
	},
	{
		id: 3,
		type: "support",
		message: "New support ticket: Website loading issues",
		timestamp: "12 minutes ago",
		icon: MessageSquare,
		color: "text-orange-500",
	},
	{
		id: 4,
		type: "security",
		message: "Security alert: Multiple failed login attempts",
		timestamp: "18 minutes ago",
		icon: Shield,
		color: "text-red-500",
	},
	{
		id: 5,
		type: "system",
		message: "System backup completed successfully",
		timestamp: "1 hour ago",
		icon: CheckCircle,
		color: "text-green-500",
	},
];

const quickActions = [
	{
		title: "Add New User",
		description: "Create a new user account",
		icon: Plus,
		color: "bg-blue-500 hover:bg-blue-600",
		href: "/admin/users/add",
	},
	{
		title: "View Reports",
		description: "Access detailed analytics",
		icon: BarChart3,
		color: "bg-green-500 hover:bg-green-600",
		href: "/admin/reports",
	},
	{
		title: "Support Tickets",
		description: "Manage customer support",
		icon: MessageSquare,
		color: "bg-orange-500 hover:bg-orange-600",
		href: "/admin/support",
	},
	{
		title: "System Settings",
		description: "Configure system preferences",
		icon: Settings,
		color: "bg-purple-500 hover:bg-purple-600",
		href: "/admin/settings",
	},
];

const topPerformers = [
	{
		name: "Sarah Johnson",
		role: "Sales Manager",
		performance: 95,
		revenue: "$12,450",
		avatar: "SJ",
	},
	{
		name: "Mike Chen",
		role: "Lead Developer",
		performance: 92,
		revenue: "$8,230",
		avatar: "MC",
	},
	{
		name: "Emily Davis",
		role: "Customer Success",
		performance: 88,
		revenue: "$6,780",
		avatar: "ED",
	},
	{
		name: "Alex Rodriguez",
		role: "Marketing Specialist",
		performance: 85,
		revenue: "$5,940",
		avatar: "AR",
	},
];

export default function Admin() {
	return (
		<div className="space-y-6">
			{/* Header Section */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-black text-black">Admin Dashboard</h1>
					<p className="text-sm text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
				</div>
				<div className="flex items-center space-x-2">
					<Button variant="outline" size="sm" className="text-black border-gray-300 hover:bg-gray-50">
						<RefreshCw className="w-4 h-4 mr-2" />
						Refresh
					</Button>
					<Button variant="outline" size="sm" className="text-black border-gray-300 hover:bg-gray-50">
						<Download className="w-4 h-4 mr-2" />
						Export
					</Button>
					<Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
						<Bell className="w-4 h-4 mr-2" />
						Notifications
					</Button>
				</div>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{statsCards.map((stat, index) => (
					<Card key={index} className="bg-white border border-gray-200 shadow-sm">
						<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
							<CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
							<div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
								<stat.icon className={`w-4 h-4 ${stat.color.replace("bg-", "text-")}`} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold text-black">{stat.value}</div>
							<div className="flex items-center mt-1 text-xs">
								{stat.changeType === "positive" ? <ArrowUp className="w-3 h-3 mr-1 text-green-500" /> : <ArrowDown className="w-3 h-3 mr-1 text-red-500" />}
								<span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
								<span className="ml-1 text-gray-500">from last month</span>
							</div>
							<p className="mt-1 text-xs text-gray-500">{stat.description}</p>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{/* Recent Activity */}
				<div className="lg:col-span-2">
					<Card className="bg-white border border-gray-200 shadow-sm">
						<CardHeader>
							<div className="flex items-center justify-between">
								<div>
									<CardTitle className="text-black">Recent Activity</CardTitle>
									<CardDescription className="text-gray-600">Latest system activities and events</CardDescription>
								</div>
								<Button variant="outline" size="sm" className="text-black border-gray-300 hover:bg-gray-50">
									<Eye className="w-4 h-4 mr-2" />
									View All
								</Button>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{recentActivities.map((activity) => (
									<div key={activity.id} className="flex items-start space-x-3">
										<div className={`p-2 rounded-lg bg-gray-100 ${activity.color}`}>
											<activity.icon className="w-4 h-4" />
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-black">{activity.message}</p>
											<p className="text-xs text-gray-500">{activity.timestamp}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Quick Actions */}
				<div>
					<Card className="bg-white border border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-black">Quick Actions</CardTitle>
							<CardDescription className="text-gray-600">Frequently used admin functions</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								{quickActions.map((action, index) => (
									<Button key={index} variant="outline" className="w-full justify-start h-auto p-4 text-black border-gray-200 hover:bg-gray-50">
										<div className={`p-2 rounded-lg mr-3 ${action.color}`}>
											<action.icon className="w-4 h-4 text-white" />
										</div>
										<div className="text-left">
											<div className="font-medium text-black">{action.title}</div>
											<div className="text-xs text-gray-500">{action.description}</div>
										</div>
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Performance and Analytics */}
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{/* Top Performers */}
				<Card className="bg-white border border-gray-200 shadow-sm">
					<CardHeader>
						<div className="flex items-center justify-between">
							<div>
								<CardTitle className="text-black">Top Performers</CardTitle>
								<CardDescription className="text-gray-600">Highest performing team members this month</CardDescription>
							</div>
							<Badge variant="secondary" className="bg-gray-100 text-gray-700">
								<Star className="w-3 h-3 mr-1" />
								Top 4
							</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{topPerformers.map((performer, index) => (
								<div key={index} className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
											<span className="text-sm font-medium text-gray-700">{performer.avatar}</span>
										</div>
										<div>
											<p className="text-sm font-medium text-black">{performer.name}</p>
											<p className="text-xs text-gray-500">{performer.role}</p>
										</div>
									</div>
									<div className="text-right">
										<div className="flex items-center space-x-2">
											<Progress value={performer.performance} className="w-16" />
											<span className="text-sm font-medium text-black">{performer.performance}%</span>
										</div>
										<p className="text-xs text-gray-500">{performer.revenue}</p>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* System Status */}
				<Card className="bg-white border border-gray-200 shadow-sm">
					<CardHeader>
						<CardTitle className="text-black">System Status</CardTitle>
						<CardDescription className="text-gray-600">Current system health and performance</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-500" />
									<span className="text-sm font-medium text-black">Server Status</span>
								</div>
								<Badge variant="secondary" className="bg-green-100 text-green-800">
									Operational
								</Badge>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-500" />
									<span className="text-sm font-medium text-black">Database</span>
								</div>
								<Badge variant="secondary" className="bg-green-100 text-green-800">
									Healthy
								</Badge>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Clock className="w-4 h-4 text-yellow-500" />
									<span className="text-sm font-medium text-black">API Response</span>
								</div>
								<Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
									125ms avg
								</Badge>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<AlertTriangle className="w-4 h-4 text-orange-500" />
									<span className="text-sm font-medium text-black">Storage Usage</span>
								</div>
								<Badge variant="secondary" className="bg-orange-100 text-orange-800">
									78% used
								</Badge>
							</div>
							<Separator className="border-gray-200" />
							<div className="pt-2">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-black">Overall Health</span>
									<span className="text-sm text-gray-500">92%</span>
								</div>
								<Progress value={92} className="h-2" />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Recent Transactions */}
			<Card className="bg-white border border-gray-200 shadow-sm">
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-black">Recent Transactions</CardTitle>
							<CardDescription className="text-gray-600">Latest financial transactions and payments</CardDescription>
						</div>
						<div className="flex items-center space-x-2">
							<Button variant="outline" size="sm" className="text-black border-gray-300 hover:bg-gray-50">
								<Filter className="w-4 h-4 mr-2" />
								Filter
							</Button>
							<Button variant="outline" size="sm" className="text-black border-gray-300 hover:bg-gray-50">
								<Search className="w-4 h-4 mr-2" />
								Search
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-gray-200">
									<th className="text-left py-3 px-2 font-medium text-gray-600">Transaction ID</th>
									<th className="text-left py-3 px-2 font-medium text-gray-600">Customer</th>
									<th className="text-left py-3 px-2 font-medium text-gray-600">Amount</th>
									<th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
									<th className="text-left py-3 px-2 font-medium text-gray-600">Date</th>
									<th className="text-left py-3 px-2 font-medium text-gray-600">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-100 hover:bg-gray-50">
									<td className="py-3 px-2 font-mono text-xs text-gray-600">#TXN-001234</td>
									<td className="py-3 px-2 text-black">John Doe</td>
									<td className="py-3 px-2 font-medium text-black">$299.00</td>
									<td className="py-3 px-2">
										<Badge className="bg-green-100 text-green-800">Completed</Badge>
									</td>
									<td className="py-3 px-2 text-gray-500">Dec 18, 2024</td>
									<td className="py-3 px-2">
										<div className="flex items-center space-x-1">
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<Eye className="w-3 h-3" />
											</Button>
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<Edit className="w-3 h-3" />
											</Button>
										</div>
									</td>
								</tr>
								<tr className="border-b border-gray-100 hover:bg-gray-50">
									<td className="py-3 px-2 font-mono text-xs text-gray-600">#TXN-001235</td>
									<td className="py-3 px-2 text-black">Jane Smith</td>
									<td className="py-3 px-2 font-medium text-black">$149.00</td>
									<td className="py-3 px-2">
										<Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
									</td>
									<td className="py-3 px-2 text-gray-500">Dec 18, 2024</td>
									<td className="py-3 px-2">
										<div className="flex items-center space-x-1">
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<Eye className="w-3 h-3" />
											</Button>
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<Edit className="w-3 h-3" />
											</Button>
										</div>
									</td>
								</tr>
								<tr className="border-b border-gray-100 hover:bg-gray-50">
									<td className="py-3 px-2 font-mono text-xs text-gray-600">#TXN-001236</td>
									<td className="py-3 px-2 text-black">Mike Johnson</td>
									<td className="py-3 px-2 font-medium text-black">$89.00</td>
									<td className="py-3 px-2">
										<Badge className="bg-red-100 text-red-800">Failed</Badge>
									</td>
									<td className="py-3 px-2 text-gray-500">Dec 17, 2024</td>
									<td className="py-3 px-2">
										<div className="flex items-center space-x-1">
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<Eye className="w-3 h-3" />
											</Button>
											<Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-gray-100">
												<RefreshCw className="w-3 h-3" />
											</Button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
