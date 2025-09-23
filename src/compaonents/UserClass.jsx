import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "",
        avatar_url: "",
        bio: "",
        followers: 0,
        following: 0
      },
      loading: true,
      error: false
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.props.username}`
      );
      if (!response.ok) throw new Error("Network response not ok");
      const data = await response.json();
      this.setState({ userInfo: data, loading: false });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { name, location, avatar_url, bio, followers, following } =
      this.state.userInfo;
    const { loading, error } = this.state;

    if (loading) {
      return <p className="text-gray-500">Loading user data…</p>;
    }
    if (error) {
      return <p className="text-red-500">Failed to load user data.</p>;
    }

    return (
      <div className="flex items-center space-x-6 p-4 bg-gray-50 rounded-md shadow-sm">
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          className="w-24 h-24 rounded-full border-2 border-indigo-500"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{bio || "Bio not available"}</p>
          <p className="mt-1 text-gray-700">
            <strong>Location:</strong> {location || "Unknown"}
          </p>
          <p className="mt-1 text-gray-700">
            <strong>Followers:</strong> {followers}
          </p>
          <p className="mt-1 text-gray-700">
            <strong>Following:</strong> {following}
          </p>
        </div>
      </div>
    );
  }
}

UserClass.propTypes = {
  username: PropTypes.string.isRequired
};
