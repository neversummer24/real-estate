import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import Register from "./Register"; // 根据你的文件路径调整
import apiRequest from "../../libs/apiRequest"; // 引入模拟的 apiRequest
import { BrowserRouter as Router , useNavigate} from "react-router-dom";

// 模拟 apiRequest.post
vi.mock("../../libs/apiRequest", () => ({
    default: {
        post: vi.fn(),
    },
}));

// 模拟 useNavigate
vi.mock(import("react-router-dom"), async (importOriginal) => {
    const actual = await importOriginal()
    return {
      ...actual,
      useNavigate: vi.fn(),
    }
})

describe("Register component", () => {
  

  test("should navigate to login page after successful registration", async () => {
    // 模拟 API 请求成功
    apiRequest.post.mockResolvedValueOnce({});

    const mockNavigate = useNavigate();
  

    render(
      <Router>
        <Register />
      </Router>
    );

    // 模拟用户输入
    fireEvent.change(screen.getByPlaceholderText(/Username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "password123" },
    });

    // 提交表单
    fireEvent.submit(screen.getByTestId('test-form'));

    // 验证是否调用了 navigate() 跳转到登录页面
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/login"));
  });
});
